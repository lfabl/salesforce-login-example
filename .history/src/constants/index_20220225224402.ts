// export const TOKEN_URL = "https://gablesinsurancerecovery.my.salesforce.com/services/oauth2/token";
// export const AUTHORIZATION_URL = "https://gablesinsurancerecovery.my.salesforce.com/services/oauth2/authorize";
export const AUTHORIZATION_URL = "https://gablesinsurancerecovery.force.com";
export const NEW_TOKEN_GRANT_TYPE = "password";
export const REFRESH_TOKEN_GRANT_TYPE = "refresh_token";
export const CLIENT_ID = "3MVG9p1Q1BCe9GmDC8P3LbQFfVCrkV3kZcmHtAbSM18YfTYKtOqU21wTMYfOSJtBS8g4AgjFqFsRv_lxRqK8c";
export const CLIENT_SECRET = "F8E53B09183B30C5E1F6F6F78566DBD5CE604D611FCD96D224170FFC9F78B4DD";
export const REDIRECT_URI = "https://login.salesforce.com/services/oauth2/success";
export const RESPONSE_TYPE = "token";
export const CALLBACK_URL = "";

export const CLIENT_ID2 = "3MVG9p1Q1BCe9GmDC8P3LbQFfVCrkV3kZcmHtAbSM18YfTYKtOqU21wTMYfOSJtBS8g4AgjFqFsRv_lxRqK8c";
export const CALLBACK_URL2 = "gir:///success";

export const AUTH_URL = `${AUTHORIZATION_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID2}&redirect_uri=${CALLBACK_URL2}`;

export const GLOBAL_STATE_STORE = {
    accessToken: undefined
};
