const axios = require('axios');
const oauth = require('axios-oauth-client');
const tokenInterceptor = require('axios-token-interceptor');
const logger = require('./logger');

const LOGGING_NAME = 'http-client';

const { BASE_URL, STOREFRONT, OCAPI_VERSION, CLIENT_ID, CLIENT_SECRET, OAUTH_URL } = process.env;
const getOwnerCredentials = oauth.clientCredentials(axios.create(), OAUTH_URL, CLIENT_ID, CLIENT_SECRET);

function headerFormatter(res) {
    return 'Bearer ' + res.access_token;
}

function getMaxAge(res) {
    return res.expires_in * 1000;
}

function AuthenticationInterceptor(authenticate) {
    const getToken = tokenInterceptor.tokenCache(authenticate, { getMaxAge });
    return tokenInterceptor({ getToken, headerFormatter });
}

function responseLogger(response) {
    logger.logInfo(
        LOGGING_NAME,
        `↳ Received response ${response.config.method.toUpperCase()} ${response.config.url} - ${response.status} ${response.statusText}`
    );
    return response;
}

function errorHandler(error) {
    const { message, response } = error;
    lastError = error;
    const data = response?.data || message;
    const status = response?.status || 500;
    if (response) {
        logger.logError(
            LOGGING_NAME,
            `↳ Received response ${response.config.method.toUpperCase()} ${response.config.url} - ${response.status} ${
                response.statusText
            } ${message}`
        );
    } else {
        logger.logError(LOGGING_NAME, `↳ ${message}`);
    }
    return Promise.reject({ error: true, data: data?.fault?.message ?? data, status });
}

let lastError;

const shopApiPath = `${BASE_URL}${STOREFRONT}/dw/shop/${OCAPI_VERSION}`;
const shopClient = axios.create({ baseURL: shopApiPath, params: { client_id: CLIENT_ID } });
shopClient.interceptors.response.use(responseLogger, errorHandler);

const dataApiPath = `${BASE_URL}-/dw/data/${OCAPI_VERSION}`;
const dataClient = axios.create({ baseURL: dataApiPath });

dataClient.interceptors.request.use(AuthenticationInterceptor(getOwnerCredentials));
dataClient.interceptors.response.use(responseLogger, errorHandler);

module.exports = {
    shopClient,
    dataClient
};
module.exports.getLastError = () => lastError;
