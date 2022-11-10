const { shopClient } = require('../utils/http-client');
const languageMap = require('../resources/LanguageMap.json');


/**
 * This method returns the content pages with the given IDs.
 * Will ignore invalid IDs.
 *
 * @param {number[]} contentIds Array of IDs of content pages to get.
 * @param {string} [lang] Language of the request.
 * @return {[*]} The content pages for the given IDs.
 */
const contentPagesContentIdsGet = async (contentIds, lang) => {
    const params = {};
    if (lang && languageMap[lang]) {
        params.locale = languageMap[lang];
    }

    const { data, status } = await shopClient.get(`/content/(${contentIds.join(',')})`, { params });
    const contentPages = data.data.map((contentPage) => {
        return {
            id: contentPage.id,
            label: contentPage.name,
            extract: contentPage.description
        };
    });

    return { contentPages, responseStatus: status };
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
const contentPagesGet = async (query, lang, page = 1) => {
    const pageSize = 100;
    const params = { count: pageSize, start: (page - 1) * pageSize };
    if (query) {
        params.q = query;
    }
    if (lang && languageMap[lang]) {
        params.locale = languageMap[lang];
    }

    const { data, status } = await shopClient.get(`/content_search`, { params });
    const hasNext = Boolean(data.next);
    const total = data.total;
    const contentPages = data.hits.map((contentPage) => {
        return {
            id: contentPage.id,
            label: contentPage.name,
            extract: contentPage.description
        };
    });

    return { contentPages, total, hasNext, responseStatus: status };
};

module.exports = {
    contentPagesContentIdsGet,
    contentPagesGet
};
