export const AUTHORIZATION_URL = "https://gablesinsurancerecovery.force.com";
export const NEW_TOKEN_GRANT_TYPE = "password";
export const REFRESH_TOKEN_GRANT_TYPE = "refresh_token";
export const CLIENT_ID = "3MVG9p1Q1BCe9GmDC8P3LbQFfVCrkV3kZcmHtAbSM18YfTYKtOqU21wTMYfOSJtBS8g4AgjFqFsRv_lxRqK8c";
export const REDIRECT_URI = "https://login.salesforce.com/services/oauth2/success";
export const RESPONSE_TYPE = "token";
export const CALLBACK_URL = encodeURIComponent("girApp://success");
// export const AUTH_URL = `${AUTHORIZATION_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}`;
export const AUTH_URL = "https://gablesinsurancerecovery.force.com/services/oauth2/authorize?response_type=token&client_id=3MVG9p1Q1BCe9GmDC8P3LbQFfVOxDlaBHBs5GoUlN8z7iLwOwK3MGlf1rWAWLhWHSnkJ7ETCAp9XUoaAmKlX2&redirect_uri=girApp://success";

export const GLOBAL_STATE_STORE = {
    accessToken: undefined
};
