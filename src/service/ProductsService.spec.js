const { shopClient } = require('../utils/http-client');
const data = require('./ProductsService.spec.data');
const service = require('./ProductsService');

jest.mock('../../src/utils/http-client');

describe('ProductsService', () => {
    describe('productsGet', () => {
        it('fetches product data and maps it to internal type', async () => {
            const testCategoryId = 'testCategoryId';
            const testKeyword = 'testKeyword';
            const testLang = 'testLang';
            const testPage = 1;

            shopClient.get.mockResolvedValue({ data: data.fetchProducts, status: 200 });

            const result = await service.productsGet(testCategoryId, testKeyword, testLang, testPage);

            expect(shopClient.get.mock.calls[0][0]).toContain(`/product_search`);
            expect(result.products.length).toEqual(data.fetchProducts.hits.length);
            result.products.forEach((product, index) => {
                expect(product.id).toEqual(data.fetchProducts.hits[index].product_id);
                expect(product.label).toEqual(data.fetchProducts.hits[index].product_name);
                expect(product.extract).toEqual(data.fetchProducts.hits[index].product_name);
                expect(product.image).toEqual(data.fetchProducts.hits[index].image.link);
            });
            expect(result.total).toEqual(data.fetchProducts.total);
            expect(result.hasNext).toEqual(Boolean(data.fetchProducts.next));
        });
    });
    describe('productsProductIdsGet', () => {
        it('fetches product data based on provided ids', async () => {
            const testProduct1 = data.fetchProductsById.data[0];
            const testProduct2 = data.fetchProductsById.data[1];
            const testProductIds = [testProduct1.id, testProduct2.id];
            shopClient.get.mockResolvedValue({ data: data.fetchProductsById });

            const result = await service.productsProductIdsGet(testProductIds);

            result.products.forEach((page) => {
                expect(page.id).toBeDefined();
            });
        });
    });
});
