const { shopClient } = require('../utils/http-client');
const service = require('./ContentService');
const data = require('./ContentPagesService.spec.data');

jest.mock('../../src/utils/http-client');

describe('ContentService', () => {
    describe('contentGet', () => {
        it('should fetch all Content if no contentIds are provided', async () => {
            const testStatusCode = 200;

            shopClient.get.mockResolvedValue({ data: data.contentPagesGet, status: testStatusCode });

            const result = await service.contentGet('testPage', 'EN');

            result.content.forEach((page) => {
                expect(page.id).toBeDefined();
            });
            expect(result.total).toEqual(data.contentPagesGet.total);
            expect(result.hasNext).toEqual(Boolean(data.contentPagesGet.next));
        });
    });
    describe('contentContentIdsGet', () => {
        it('should fetch specific content Pages by Id', async () => {
            const testPage1 = data.contentPagesIdsGet.data[0];
            const testPage2 = data.contentPagesIdsGet.data[1];
            const testContentIds = [testPage1.id, testPage2.id];
            shopClient.get.mockResolvedValue({ data: data.contentPagesIdsGet });

            const result = await service.contentContentIdsGet(testContentIds);

            result.content.forEach((page) => {
                const isInList = testContentIds.includes(page.id);
                expect(isInList).toEqual(true);
            });
        });
    });
});
