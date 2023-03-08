const { shopClient } = require('../utils/http-client');
const languageMap = require('../resources/LanguageMap.json');
const logger = require('../utils/logger');

const LOGGING_NAME = 'ProductsService';

/**
 * This method fetches all products and transforms them into the internal model.
 *
 * @param {string} [categoryId] ID of the category to get products from.
 * @param {string} [keyword] Keyword to filter the products by.
 * @param {string} [lang] Language of the request.
 * @param {number} [page=1] Number of the page to retrieve.
 * @return The fetched products.
 */
const productsGet = async (categoryId, keyword, lang, page = 1) => {
    const pageSize = 100;
    const params = {
        count: pageSize,
        start: (page - 1) * pageSize,
        expand: 'images'
    };
    if (keyword) {
        params.q = keyword;
    }
    if (lang && languageMap[lang]) {
        params.locale = languageMap[lang];
    }
    if (categoryId) {
        params.refine = 'cgid=' + categoryId;
    }

    logger.logDebug(LOGGING_NAME, `Performing GET request to /product_search with body ${JSON.stringify({ params })}`);

    const { data, status } = await shopClient.get(`/product_search`, { params });

    const hasNext = Boolean(data.next);
    const total = data.total;
    const products =
        data.hits?.map((product) => {
            return {
                extract: product.product_name,
                id: product.product_id,
                image: product.image?.link,
                label: product.product_name,
                thumbnail: product.image?.link
            };
        }) || [];

    return { products, total, hasNext, responseStatus: status };
};

/**
 * This method fetches the data for the products with the given IDs.
 * @see SwaggerUI {@link http://localhost:3000/api/#/Products/productsProductIdsGet}
 *
 * @param {string[]} [productIds] IDs of the categories to get.
 * @param {string} [lang] Language of the request.
 * @return Promise<{ hasNext: boolean, total: number, products: any[]}> The category data.
 */
const productsProductIdsGet = async (productIds, lang) => {
    const params = {
        expand: 'images'
    };
    if (lang && languageMap[lang]) {
        params.locale = languageMap[lang];
    }

    const path = `/products/(${productIds.join(',')})`;

    logger.logDebug(LOGGING_NAME, `Performing GET request to ${path} with body ${JSON.stringify({ params })}`);

    const { data } = await shopClient.get(path, { params });

    const products =
        data.data?.map((product) => {
            const thumbnail = product.image_groups.find((imageGroup) => imageGroup.view_type === 'small');
            const image = product.image_groups.find((imageGroup) => imageGroup.view_type === 'large');
            return {
                extract: product.short_description,
                id: product.id,
                image: image?.images[0].link,
                label: product.name,
                thumbnail: thumbnail?.images[0].link
            };
        }) || [];

    return { products };
};

module.exports = {
    productsGet,
    productsProductIdsGet
};
