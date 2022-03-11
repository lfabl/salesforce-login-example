import {
    REFRESH_TOKEN_GRANT_TYPE,
    AUTHORIZATION_URL,
    CLIENT_SECRET,
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
    TOKEN_URL
} from "../constants";
import storage from "../storage";

const TIME_OUT = 5000;

const timer = ({
    timeout = TIME_OUT
}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Connection timed out.");
        }, timeout);
    });
};

const request = ({
    method = "GET",
    accessToken,
    headers,
    body,
    url
}) => {
    return new Promise((resolve, reject) => {
        const _headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...headers
        };

        if(accessToken) {
            _headers.Authorization = `Bearer ${accessToken}`;
        }

        fetch(url, {
            method: method,
            headers: _headers,
            body: body
        })
            .then((res) => res.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                if(err.error === "invalid_grant") {
                    const refreshToken = storage.getString("refreshToken");
                    refreshToken({
                        refreshToken: refreshToken
                    })
                        .then((newAccessToken) => {
                            request({
                                accessToken: newAccessToken,
                                method,
                                headers,
                                body,
                                url
                            });
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    reject(err);
                }
            });
    });
};

export const refreshToken = ({
    refreshToken
}) => {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams({
            grant_type: REFRESH_TOKEN_GRANT_TYPE,
            refresh_token: refreshToken,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        });

        api({
            url: `${TOKEN_URL}?${params}`,
            method: "POST"
        })
            .then((res) => {
                if(res.error) {
                    reject(res.error);
                    return;
                }
                resolve(res.access_token);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const api = ({
    accessToken,
    headers,
    timeout,
    method,
    body,
    url
}) => {
    return new Promise((resolve, reject) => {
        Promise.race([
            timer({
                timeout
            }),
            request({
                accessToken,
                headers,
                method,
                body,
                url
            })
        ])
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export default api;