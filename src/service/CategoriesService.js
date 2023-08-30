const { dataClient, shopClient } = require('../utils/http-client');
const { STOREFRONT } = process.env;
const languageMap = require('../resources/LanguageMap.json');
const logger = require('../utils/logger');

const LOGGING_NAME = 'CategoriesService';

const pageSize = 100;

const mapCategoryData = (categoryData, lang) => {
    return categoryData.map((category) => {
        return {
            id: category.id,
            label: category.name?.[languageMap[lang.toUpperCase()]] ?? category.name?.default,
            parentId: category.parent_category_id
        };
    });
};

/**
 * This method recursively creates a nested tree structure for the given categories.
 *
 * @param {any[]} categories The arrays of categories to work with.
 * @param {string} [parentId=0] ID of the parent category.
 */
const buildCategoryTree = (categories, parentId = 'root') => {
    return categories
        .filter((category) => category.parentId === parentId)
        .map(({ id, label }) => {
            const children = buildCategoryTree(categories, id);
            return { id, label, ...(children?.length && { children }) };
        });
};

/**
 * Transforms the given nested category tree to a flat list.
 *
 * @param {any[]} categories Categories to transform to flat list.
 * @return {any[]} The categories as a flat list.
 */
const flattenCategories = (categories) => {
    return categories.reduce((result, { children, ...rest }) => {
        result.push(rest);
        if (children) {
            result.push(...flattenCategories(children));
        }
        return result;
    }, []);
};

const fetchCategories = async (lang, page = 1, fetchAllCategories = false) => {
    const commonParams = { count: pageSize, start: (Number(page) - 1) * pageSize };
    if (lang && languageMap[lang]) {
        commonParams.locale = languageMap[lang];
    }

    const catalogSelect = '(count,expand,next,previous,select,start,total,data.(id,assigned_sites.(id)))';
    const catalogParams = { ...commonParams, select: catalogSelect };

    logger.logDebug(LOGGING_NAME, `Performing GET request to /catalogs with body ${JSON.stringify({ params: catalogParams })}`);

    const { data: catalogData } = await dataClient.get(`/catalogs`, { params: catalogParams });
    const catalog = catalogData.data?.find((catalogIterator) => catalogIterator.assigned_sites?.some((site) => site.id === STOREFRONT));

    const categoriesUrl = `/catalogs/${catalog.id}/categories`;
    const categorySelect = '(count,next,previous,select,start,total,data.(id,name,parent_category_id))';
    const categoryParams = { ...commonParams, select: categorySelect };

    logger.logDebug(LOGGING_NAME, `Performing GET request to ${categoriesUrl} with body ${JSON.stringify({ params: categoryParams })}`);

    let categories = await dataClient.get(categoriesUrl, { params: categoryParams });
    if (fetchAllCategories && categories.data.next) {
        categoryParams.count = categories.total;

        logger.logDebug(LOGGING_NAME, `Performing GET request to ${categoriesUrl} with body ${JSON.stringify({ params: categoryParams })}`);

        categories = await dataClient.get(categoriesUrl, { params: categoryParams });
    }
    return categories;
};

/**
 * This method checks if the Parameter is a truthy value.
 * If the parameter is a string it also casts empty strings to undefined.
 * @param {any} value the value to be checked
 * @return {boolean} if the value is truthy
 */
const checkIfEmpty = (value) => {
    if (value === '') {
        value = undefined;
    }
    return Boolean(value);
};

/**
 * This method fetches all categories and returns them as a flat list structure.
 * @see SwaggerUI {@link http://localhost:3000/api/#/categories/get_categories}
 *
 * @param {string} [parentId] ID of the parent category to filter categories by.
 * @param {string} [lang] Language of the request.
 * @param {number} [page=1] Number of the page to retrieve.
 * @return Promise<{ hasNext: boolean, total: number, categories: any[]}> The category tree.
 */
const categoriesGet = async (parentId, lang, page = 1) => {
    const selfPaginate = checkIfEmpty(parentId);

    const { data: categoryData } = await fetchCategories(lang, page, selfPaginate);

    const mappedData = mapCategoryData(categoryData.data, lang);
    const tree = buildCategoryTree(mappedData, selfPaginate ? parentId : undefined);

    let categories = flattenCategories(tree);

    let total = categoryData.total;
    let hasNext = Boolean(categoryData.next);
    if (selfPaginate) {
        total = categories.length;
        hasNext = page * pageSize <= total;
        const start = pageSize * (page - 1);
        const end = pageSize * page;
        categories = categories.slice(start, end);
    }

    return { categories, total, hasNext };
};

/**
 * This method fetches all categories provided via the categoryIds comma seperated string.
 * @see SwaggerUI {@link http://localhost:3000/api/#/categories/get_categories}
 *
 * @param {string[]} categoryIds a comma seperated string to represent the categoryIds (e.G. id1,id2)
 * @param {string} lang the language used for the request
 */
const categoriesCategoryIdsGet = async (categoryIds, lang) => {
    const params = {};
    if (lang && languageMap[lang]) {
        params.locale = languageMap[lang];
    }
    const path = `/categories/(${categoryIds.join(',')})`;

    logger.logDebug(LOGGING_NAME, `Performing GET request to ${path} with body ${JSON.stringify({ params })}`);

    let { data, status } = await shopClient.get(path, { params });
    data =
        data?.data?.map((category) => {
            return {
                id: category.id,
                label: category.name
            };
        }) || [];

    return { categories: data, responseStatus: status };
};

/**
 * This method fetches all categories and returns them as a nested structure.
 * @see SwaggerUI {@link http://localhost:3000/api/#/categories/get_categories}
 *
 * @param {number | string} [parentId] ID of the parent category to filter categories by.
 * @param {string} [lang] Language of the request.
 * @return Promise<{ hasNext: boolean, total: number, categories: any[]}> The category tree.
 */
const categoryTreeGet = async (parentId = 'root', lang) => {
    const { data: categoryData } = await fetchCategories(lang, 1, true);

    const categories = mapCategoryData(categoryData.data, lang);

    const categorytree = buildCategoryTree(categories, parentId);

    return { categorytree };
};

module.exports = {
    categoriesGet,
    categoriesCategoryIdsGet,
    categoryTreeGet
};
