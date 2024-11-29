const { shopClient } = require('../utils/http-client');
const languageMap = require('../resources/LanguageMap.json');
const logger = require('../utils/logger');
const { ParameterValidationError } = require('fcecom-bridge-commons');

const LOGGING_NAME = 'ContentService';

/**
 * This method returns the content pages with the given IDs.
 * Will ignore invalid IDs.
 *
 * @param {number[]} contentIds Array of IDs of content pages to get.
 * @param {string} [lang] Language of the request.
 * @return {[*]} The content pages for the given IDs.
 */
const contentContentIdsGet = async (contentIds, lang) => {
    const params = {};
    if (lang && languageMap[lang]) {
        params.locale = languageMap[lang];
    }
    const path = `/content/(${contentIds.join(',')})`;

    logger.logDebug(LOGGING_NAME, `Performing GET request to ${path} with body ${JSON.stringify({ params })}`);

    const { data, status } = await shopClient.get(path, { params });
    const content = data.data.map((contentPage) => {
        return {
            id: contentPage.id,
            label: contentPage.name,
            extract: contentPage.description
        };
    });

    return { content, responseStatus: status, total: content.length };
};

/**
 * This method returns all content pages.
 * Will also update the cache with the latest values.
 *
 * @param {string} query Query string to search pages for.
 * @param {string} [lang] Language of the request.
 * @param {number} [page=1] Number of the page to retrieve.
 * @return An array containing all content pages.
 */
const contentGet = async (query, lang, page = 1) => {
    const pageSize = 100;
    const params = { count: pageSize, start: (page - 1) * pageSize };

    if (query) params.q = query;
    else throw new ParameterValidationError(`Mandatory parameter 'query' not provided.`);

    if (lang && languageMap[lang]) params.locale = languageMap[lang];

    logger.logDebug(LOGGING_NAME, `Performing GET request to /content_search with body ${JSON.stringify({ params })}`);

    const { data, status } = await shopClient.get(`/content_search`, { params });
    const hasNext = Boolean(data.next);
    const total = data.total;
    const content =
        data?.hits?.map((contentPage) => {
            return {
                id: contentPage.id,
                label: contentPage.name,
                extract: contentPage.description
            };
        }) || [];

    return { content, total, hasNext, responseStatus: status };
};

module.exports = {
    contentContentIdsGet,
    contentGet
};
