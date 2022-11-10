const { shopClient } = require('../utils/http-client');
const service = require('./ContentPagesService');
const data = require('./ContentPagesService.spec.data');

jest.mock('../../src/utils/http-client');

describe('ContentPagesService', () => {
    describe('contentPagesGet', () => {
        it('should fetch all ContentPages if no contentIds are provided', async () => {
            const testStatusCode = 200;

            shopClient.get.mockResolvedValue({ data: data.contentPagesGet, status: testStatusCode });

            const result = await service.contentPagesGet('testPage', 'EN');

            result.contentPages.forEach((page) => {
                expect(page.id).toBeDefined();
            });
            expect(result.total).toEqual(data.contentPagesGet.total);
            expect(result.hasNext).toEqual(Boolean(data.contentPagesGet.next));
        });
    });
    describe('contentPagesContentIdsGet', () => {
        it('should fetch specific content Pages by Id', async () => {
            const testPage1 = data.contentPagesIdsGet.data[0];
            const testPage2 = data.contentPagesIdsGet.data[1];
            const testContentIds = [testPage1.id, testPage2.id];
            shopClient.get.mockResolvedValue({ data: data.contentPagesIdsGet });

            const result = await service.contentPagesContentIdsGet(testContentIds);

            result.contentPages.forEach((page) => {
                const isInList = testContentIds.includes(page.id);
                expect(isInList).toEqual(true);
            });
        });
    });
});
