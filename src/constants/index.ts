export const MAIN_URL = "https://sbox-gablesinsurancerecovery.cs1.force.com";
export const SERVICE_VERSION = "54.0";
export const SERVICE_URL = `${MAIN_URL}/services/data/v${SERVICE_VERSION}/sobjects`;
export const AUTHORIZATION_URL = `${MAIN_URL}/services/oauth2/authorize`;
export const TOKEN_URL = `${MAIN_URL}/services/oauth2/token`;
export const NEW_TOKEN_GRANT_TYPE = "password";
export const REFRESH_TOKEN_GRANT_TYPE = "refresh_token";
export const CLIENT_ID = "3MVG9p1Q1BCe9GmDC8P3LbQFfVOxDlaBHBs5GoUlN8z7iLwOwK3MGlf1rWAWLhWHSnkJ7ETCAp9XUoaAmKlX2";
export const CLIENT_SECRET = "02C99F086E54968639F366DB578CA685D318B0A5BDF21DFD82DE5EECF3F05D35";
export const REDIRECT_URI = "https://login.salesforce.com/services/oauth2/success";
export const RESPONSE_TYPE = "token";
export const CALLBACK_URL = encodeURIComponent("girapp://success");
export const AUTH_URL = `${AUTHORIZATION_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}`;

export const GLOBAL_STATE_STORE = {
    accessToken: undefined,
    refreshToken: undefined
};
