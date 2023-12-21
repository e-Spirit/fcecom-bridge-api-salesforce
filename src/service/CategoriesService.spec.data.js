module.exports.categoriesGet = {
    count: 14,
    next: 'https://test.salesforce.com/s/-/dw/data/v22_10/catalogs/storefront-catalog-m-non-en/categories?start=0&count=14',
    start: 0,
    total: 14,
    data: [
        {
            id: 'gift-certificates',
            name: {
                default: 'Gift Certificates'
            },
            parent_category_id: 'root'
        },
        {
            id: 'hidden',
            name: {
                default: 'Hidden Category'
            },
            parent_category_id: 'root'
        },
        {
            id: 'mens',
            name: {
                default: 'Mens'
            },
            parent_category_id: 'root'
        },
        {
            id: 'mens-accessories',
            name: {
                default: 'Accessories'
            },
            parent_category_id: 'mens'
        },
        {
            id: 'mens-clothing',
            name: {
                default: 'Clothing'
            },
            parent_category_id: 'mens'
        },
        {
            id: 'root',
            name: {
                default: 'Storefront Catalog - Non-EN'
            }
        },
        {
            id: 'sale',
            name: {
                default: 'Sale'
            },
            parent_category_id: 'hidden'
        },
        {
            id: 'sale-mens',
            name: {
                default: 'Mens'
            },
            parent_category_id: 'sale'
        },
        {
            id: 'sale-mens-accessories',
            name: {
                default: 'Accessories'
            },
            parent_category_id: 'sale-mens'
        },
        {
            id: 'sale-mens-clothing',
            name: {
                default: 'Clothing'
            },
            parent_category_id: 'sale-mens'
        },
        {
            id: 'sale-womens',
            name: {
                default: 'Womens'
            },
            parent_category_id: 'sale'
        },
        {
            id: 'sale-womens-accessories',
            name: {
                default: 'Accessories'
            },
            parent_category_id: 'sale-womens'
        },
        {
            id: 'sale-womens-clothing',
            name: {
                default: 'Clothing'
            },
            parent_category_id: 'sale-womens'
        }
    ]
};

module.exports.catalogsGet = {
    count: 3,
    start: 0,
    total: 3,
    data: [
        {
            id: 'apparel-m-catalog'
        },
        {
            id: 'storefront-catalog-m-en'
        },
        {
            id: 'storefront-catalog-m-non-en',
            assigned_sites: [
                {
                    id: 'testStoreFront'
                }
            ]
        }
    ]
};

module.exports.categoriesIdsGet = {
    count: 2,
    data: [
        {
            categories: [
                {
                    id: 'mens-clothing-suits',
                    name: 'Suits',
                    parent_category_id: 'mens-clothing'
                },
                {
                    id: 'mens-clothing-jackets',
                    name: 'Jackets & Coats',
                    parent_category_id: 'mens-clothing'
                },
                {
                    id: 'mens-clothing-dress-shirts',
                    name: 'Dress Shirts',
                    parent_category_id: 'mens-clothing'
                },
                {
                    id: 'mens-clothing-shorts',
                    name: 'Shorts',
                    parent_category_id: 'mens-clothing',
                },
                {
                    id: 'mens-clothing-pants',
                    name: 'Pants',
                    parent_category_id: 'mens-clothing'
                }
            ],
            id: 'mens-clothing',
            name: 'Clothing',
            parent_category_id: 'mens'
        },
        {
            categories: [
                {
                    id: 'womens-jewelry-earrings',
                    name: 'Earrings',
                    parent_category_id: 'womens-jewelry'
                },
                {
                    id: 'womens-jewelry-bracelets',
                    name: 'Bracelets',
                    parent_category_id: 'womens-jewelry',
                },
                {
                    id: 'womens-jewelry-necklaces',
                    name: 'Necklaces',
                    parent_category_id: 'womens-jewelry'
                }
            ],
            id: 'womens-jewelry',
            name: 'Jewelry',
            parent_category_id: 'womens'
        }
    ],
    total: 2
};
