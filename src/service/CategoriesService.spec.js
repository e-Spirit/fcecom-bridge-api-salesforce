const { dataClient, shopClient } = require('../utils/http-client');
const data = require('./CategoriesService.spec.data');
const service = require('./CategoriesService');

jest.mock('../../src/utils/http-client');

describe('CategoriesService', () => {
    describe('categoriesGet', () => {
        it('returns the categories as list', async () => {
            dataClient.get.mockResolvedValueOnce({ data: data.catalogsGet }).mockResolvedValue({ data: data.categoriesGet });

            const result = await service.categoriesGet(undefined, undefined, 'EN', 1);

            expect(dataClient.get.mock.calls[0][0]).toEqual('/catalogs');
            expect(dataClient.get.mock.calls[1][0]).toContain('/categories');
            const expectedLength = data.categoriesGet.data.filter((category) => category.id !== 'root').length;
            expect(result.categories.length).toEqual(expectedLength);
            for (let i = 0; i < data.categoriesGet.count.length; i++) {
                // Check if every category from the test data set is present in the result (ignore ordering)
                expect(result.categories.findIndex((category) => category.id === data.categoriesGet.data[i].id) !== -1).toEqual(true);
            }
            expect(result.hasNext).toEqual(false);
            expect(result.total).toEqual(expectedLength); /* total and count the same due to pageSize */
        });
        it('returns the categories as list with keyword', async () => {
            dataClient.get.mockResolvedValueOnce({ data: data.catalogsGet }).mockResolvedValue({ data: data.categoriesGet });

            const query = 'Men';

            const result = await service.categoriesGet(undefined, query, 'EN', 1);

            const expectedLength = data.categoriesGet.data.filter((category) => category.name.default.toLowerCase().includes(query.toLowerCase())).length;

            expect(dataClient.get.mock.calls[0][0]).toEqual('/catalogs');
            expect(dataClient.get.mock.calls[1][0]).toContain('/categories');
            expect(result.categories.length).toEqual(expectedLength);
            expect(result.categories[0].label).toEqual('Mens');
            expect(result.categories[1].label).toEqual('Womens');
            expect(result.categories[2].label).toEqual('Mens');
            expect(result.hasNext).toEqual(false);
            expect(result.total).toEqual(expectedLength);
        });
        it('returns the categories as list with parentId and keyword', async () => {
            dataClient.get.mockResolvedValueOnce({ data: data.catalogsGet }).mockResolvedValue({ data: data.categoriesGet });

            const query = 'Cl';

            const result = await service.categoriesGet('mens', query, 'EN', 1);

            const expectedLength = 1;

            expect(dataClient.get.mock.calls[0][0]).toEqual('/catalogs');
            expect(dataClient.get.mock.calls[1][0]).toContain('/categories');
            expect(result.categories[0].label).toEqual('Clothing');
            expect(result.hasNext).toEqual(false);
            expect(result.total).toEqual(expectedLength);
        });
    });

    describe('categoriesCategoryIdsGet', () => {
        it('returns the categories pages with the given IDs', async () => {
            const testCategory = data.categoriesIdsGet.data[0];
            const categoryIds = [testCategory.id, 'thisIdDoesNotExist'];

            shopClient.get.mockResolvedValue({ data: data.categoriesIdsGet, status: 200 });

            const result = await service.categoriesCategoryIdsGet(categoryIds);

            expect(result.categories.length).toEqual(data.categoriesIdsGet.total);
            expect(result.categories[0].id).toEqual(categoryIds[0]);
        });
    });

    describe('categoryTreeGet', () => {
        it('returns the categories as tree (with parent ID)', async () => {
            dataClient.get.mockResolvedValueOnce({ data: data.catalogsGet }).mockResolvedValue({ data: data.categoriesGet });

            const result = await service.categoryTreeGet('root');

            expect(result.categorytree[0].id).toEqual('gift-certificates');
            expect(result.categorytree[1].id).toEqual('hidden');
            expect(result.categorytree[1].children[0].id).toEqual('sale');
            expect(result.categorytree[1].children[0].children[0].id).toEqual('sale-mens');
            expect(result.categorytree[1].children[0].children[1].id).toEqual('sale-womens');
            expect(result.categorytree[1].children[0].children[0].children[0].id).toEqual('sale-mens-accessories');
            expect(result.categorytree[1].children[0].children[0].children[1].id).toEqual('sale-mens-clothing');
        });
    });

    describe('categoriesGet', () => {
        it('returns the categories as list', async () => {
            dataClient.get.mockResolvedValueOnce({ data: data.catalogsGet }).mockResolvedValue({ data: data.categoriesGet });

            const result = await service.categoryTreeGet(0, 'EN');

            expect(dataClient.get.mock.calls[0][0]).toEqual('/catalogs');
            expect(dataClient.get.mock.calls[1][0]).toContain('/categories');
            for (let i = 0; i < data.categoriesGet.count.length; i++) {
                // Check if every category from the test data set is present in the result (ignore ordering)
                const stringInResultList = function (string, list) {
                    return list.find(function (item) {
                        if (item.id === string) {
                            return true;
                        } else if (item.children.length > 0) {
                            return stringInResultList(string, item.children);
                        } else {
                            return false;
                        }
                    });
                };
                expect(stringInResultList(data.categoriesGet.data[i].id, result.categories)).toBe(true);
            }
        });
    });
});
