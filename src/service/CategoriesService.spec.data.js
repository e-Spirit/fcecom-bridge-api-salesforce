module.exports.categoriesGet = {
    _v: '22.10',
    _type: 'categories',
    count: 25,
    next: 'https://test.salesforce.com/s/-/dw/data/v22_10/catalogs/storefront-catalog-m-non-en/categories?start=25&count=25',
    select: '(count,next,previous,select,start,total,data.(id,name,parent_category_id,categories.(id,name)))',
    start: 0,
    total: 42,
    data: [
        {
            _type: 'category',
            _resource_state: '8be3773271dda66ffdf148ec8531d058f8ce84904767546544577748b6eab75a',
            id: 'gift-certificates',
            name: {
                default: 'Gift Certificates'
            },
            parent_category_id: 'root'
        },
        {
            _type: 'category',
            _resource_state: 'cda26ffbd23ec8da39db68c8b4fa1509de2684a65e0d96462fc0829184cc4aa8',
            id: 'hidden',
            name: {
                default: 'Hidden Category'
            },
            parent_category_id: 'root'
        },
        {
            _type: 'category',
            _resource_state: '2603b50adb0119849f29704dbd248ae7d5b5c18740229c874cb895d4fb5e7523',
            id: 'mens',
            name: {
                default: 'Mens'
            },
            parent_category_id: 'root'
        },
        {
            _type: 'category',
            _resource_state: '558b5c13e973d0bbc00e8338e9700aec93db58709008b30b37190fd7a344aed7',
            id: 'mens-accessories',
            name: {
                default: 'Accessories'
            },
            parent_category_id: 'mens'
        },
        {
            _type: 'category',
            _resource_state: 'cab3aadc9f81d9fc529ee9d79489cfc9947f0469f26a7638aa1cdf5f30ca144f',
            id: 'mens-accessories-gloves',
            name: {
                default: 'Gloves'
            },
            parent_category_id: 'mens-accessories'
        },
        {
            _type: 'category',
            _resource_state: '745d83346665b1826d489710f42590e75fcacf72d2903f52acd658ff0c48696a',
            id: 'mens-accessories-luggage',
            name: {
                default: 'Luggage'
            },
            parent_category_id: 'mens-accessories'
        },
        {
            _type: 'category',
            _resource_state: 'd4a16b1d67332cf07a46b58b0e158998dd9a412f0b689b70fee29e5cb56732da',
            id: 'mens-accessories-ties',
            name: {
                default: 'Ties'
            },
            parent_category_id: 'mens-accessories'
        },
        {
            _type: 'category',
            _resource_state: '515a504df7f49239bc77d7f5c0f697cb4f7eb594655b94803afe840d49420588',
            id: 'mens-clothing',
            name: {
                default: 'Clothing'
            },
            parent_category_id: 'mens'
        },
        {
            _type: 'category',
            _resource_state: '35cea2559f9a339502f17007374e68390bda88d27e578c1161d567f9f2ccd73a',
            id: 'mens-clothing-dress-shirts',
            name: {
                default: 'Dress Shirts'
            },
            parent_category_id: 'mens-clothing'
        },
        {
            _type: 'category',
            _resource_state: 'd31b4407d1ca82fad21e2afef435add2bd3741b4300f910141a38dfaaa0ce8a4',
            id: 'mens-clothing-jackets',
            name: {
                default: 'Jackets & Coats'
            },
            parent_category_id: 'mens-clothing'
        },
        {
            _type: 'category',
            _resource_state: '73012eda803a5300d83c6f2592ad0a89b05cf83fb0ab32f163ba2bfe68117243',
            id: 'mens-clothing-pants',
            name: {
                default: 'Pants'
            },
            parent_category_id: 'mens-clothing'
        },
        {
            _type: 'category',
            _resource_state: '7c56568b29d08c28239e8515ff0f62ded9d93c74b0b81978d65382bb1a854cfb',
            id: 'mens-clothing-shorts',
            name: {
                default: 'Shorts'
            },
            parent_category_id: 'mens-clothing'
        },
        {
            _type: 'category',
            _resource_state: '5b7cbb5f4d8eb9d14ed63819ded9673db9f8e7cd389e059e7a4aa6bc1af105cd',
            id: 'mens-clothing-suits',
            name: {
                default: 'Suits'
            },
            parent_category_id: 'mens-clothing'
        },
        {
            _type: 'category',
            _resource_state: 'a62fe42bfcc4620ec50f0a182371e55a68be6fa9fd2b6d83e4fd76350d83414c',
            id: 'newarrivals',
            name: {
                default: 'New Arrivals'
            },
            parent_category_id: 'root'
        },
        {
            _type: 'category',
            _resource_state: 'dbdc918c5234d2495874f0a30d3160eb6e449c94a8452d7a35df86da672b71ff',
            id: 'newarrivals-mens',
            name: {
                default: 'Mens'
            },
            parent_category_id: 'newarrivals'
        },
        {
            _type: 'category',
            _resource_state: '7a2e89a05138e3c5ceb2b9e11af08ecca70b44e598f75225a9535de71d8df181',
            id: 'newarrivals-womens',
            name: {
                default: 'Womens'
            },
            parent_category_id: 'newarrivals'
        },
        {
            _type: 'category',
            _resource_state: 'cfc10c42ef0864146ab3077faed0186cdb1cb6ad8a14d413991857c4eba630fc',
            id: 'root',
            name: {
                default: 'Storefront Catalog - Non-EN'
            }
        },
        {
            _type: 'category',
            _resource_state: 'bd3ad0e896713885ca4add958a8d2ef0f41feec1c9991f9397aa967c5e5a27ff',
            id: 'sale',
            name: {
                default: 'Sale'
            },
            parent_category_id: 'hidden'
        },
        {
            _type: 'category',
            _resource_state: 'f9eb51c0687d5f07c258fa6ed62d25464aaa4bfff87cde909d5a24de3a4d6d74',
            id: 'sale-mens',
            name: {
                default: 'Mens'
            },
            parent_category_id: 'sale'
        },
        {
            _type: 'category',
            _resource_state: 'c837aec1315916869dbf96cec18c4d8de1bce0feb558646ebf0f76f3e7461a54',
            id: 'sale-mens-accessories',
            name: {
                default: 'Accessories'
            },
            parent_category_id: 'sale-mens'
        },
        {
            _type: 'category',
            _resource_state: '266fedb42360801237f928681c3589ae0a6781c5243b299ccd5e7f70c5255828',
            id: 'sale-mens-clothing',
            name: {
                default: 'Clothing'
            },
            parent_category_id: 'sale-mens'
        },
        {
            _type: 'category',
            _resource_state: '5b13349ebebe46fd5dfb46a9d16d8d9fe2cbd05549d15247661a0858a2a1f30e',
            id: 'sale-mens-footwear',
            name: {
                default: 'Footwear'
            },
            parent_category_id: 'sale-mens'
        },
        {
            _type: 'category',
            _resource_state: '18cb0f0e2645a259a9982d58fcc3dbed342fe9eb7754fa01c828689e805eac0f',
            id: 'sale-womens',
            name: {
                default: 'Womens'
            },
            parent_category_id: 'sale'
        },
        {
            _type: 'category',
            _resource_state: 'a3e2f5d7d3856e888e212016a80c09553303429b2fd922c4bf9ce98223727dff',
            id: 'sale-womens-accessories',
            name: {
                default: 'Accessories'
            },
            parent_category_id: 'sale-womens'
        },
        {
            _type: 'category',
            _resource_state: '91531588f83b8a396332868ebd04d7e4a5b2455dd2023be519b90ef39a7186a3',
            id: 'sale-womens-clothing',
            name: {
                default: 'Clothing'
            },
            parent_category_id: 'sale-womens'
        }
    ]
};

module.exports.catalogsGet = {
    _v: '21.10',
    _type: 'catalogs',
    count: 5,
    select: '(count,expand,next,previous,select,start,total,data.(id, assigned_sites.(id)))',
    start: 0,
    total: 5,
    data: [
        {
            _type: 'catalog',
            _resource_state: '63687414a8bf3542ab9b4270e2176ca7352d8d889d6ad93a428d63009cee00b5',
            id: 'apparel-m-catalog'
        },
        {
            _type: 'catalog',
            _resource_state: 'c680caadcfcfef10536ac8ca265cc71a05c75d19650ee9bb1a022b079dadcb58',
            id: 'electronics-m-catalog'
        },
        {
            _type: 'catalog',
            _resource_state: '41d96de6ac14d393f7b8123d6300a714e1131ffa0150c422af7b41f6e408493f',
            id: 'storefront-catalog-great-eastern',
            assigned_sites: [
                {
                    _type: 'site',
                    id: 'TEST_1'
                }
            ]
        },
        {
            _type: 'catalog',
            _resource_state: 'a563f1472cd16a0b4a9f332663d1c3689c57b2d9081f54d79855a99a0d96f7a0',
            id: 'storefront-catalog-m-en',
            assigned_sites: [
                {
                    _type: 'site',
                    id: 'TEST_2'
                },
                {
                    _type: 'site',
                    id: 'TEST_3'
                }
            ]
        },
        {
            _type: 'catalog',
            _resource_state: 'b39535e58cf5c55696a561092478c7df3a9a89bfb093a580e99963313976c7e6',
            id: 'storefront-catalog-m-non-en',
            assigned_sites: [
                {
                    _type: 'site',
                    id: 'TEST_4'
                },
                {
                    _type: 'site',
                    id: 'TEST_5'
                },
                {
                    _type: 'site',
                    id: 'TEST_6'
                },
                {
                    _type: 'site',
                    id: 'TEST_7'
                },
                {
                    _type: 'site',
                    id: 'TEST_8'
                },
                {
                    _type: 'site',
                    id: 'TEST_9'
                },
                {
                    _type: 'site',
                    id: 'TEST_10'
                },
                {
                    _type: 'site',
                    id: 'TEST_11'
                },
                {
                    _type: 'site',
                    id: 'TEST_12'
                },
                {
                    _type: 'site',
                    id: 'TEST_13'
                },
                {
                    _type: 'site',
                    id: 'TEST_14'
                },
                {
                    _type: 'site',
                    id: 'testStoreFront'
                },
                {
                    _type: 'site',
                    id: 'TEST_16'
                },
                {
                    _type: 'site',
                    id: 'TEST_17'
                }
            ]
        }
    ]
};

module.exports.categoriesIdsGet = {
    _v: '22.10',
    _type: 'category_result',
    count: 2,
    data: [
        {
            _type: 'category',
            categories: [
                {
                    _type: 'category',
                    id: 'mens-clothing-suits',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw8f2bce0e/images/slot/sub_banners/cat-banner-mens-suits.jpg',
                    name: 'Suits',
                    page_description:
                        "Shop Men's suits for business or pleasure. Enjoy from a variety of different styles and cuts at Commerce Cloud.",
                    page_title: 'Mens Suits for Business and Casual',
                    parent_category_id: 'mens-clothing',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'mens',
                            name: 'Mens'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing',
                            name: 'Clothing'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing-suits',
                            name: 'Suits'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true,
                    c_slotBannerImage:
                        'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwf70ee972/images/slot/landing/cat-landing-slotbottom-mens-suits.jpg'
                },
                {
                    _type: 'category',
                    id: 'mens-clothing-jackets',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwe85cf9b2/images/slot/sub_banners/cat-banner-mens-jackets.jpg',
                    name: 'Jackets & Coats',
                    page_description:
                        "Shop Men's Jackets, Coats & Outerwear. Classic outdoor-tested garments with traditional styling details that provide comfort, insulation and ease of movement, whatever the weather at Commerce Cloud.",
                    page_keywords:
                        'mens jackets, mens coats, mens leather jackets, mens waterproof jackets, mens insulated jackets, mens vests, mens water resistant jackets',
                    page_title: "Men's Jackets Including Jackets & Blazzers",
                    parent_category_id: 'mens-clothing',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'mens',
                            name: 'Mens'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing',
                            name: 'Clothing'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing-jackets',
                            name: 'Jackets & Coats'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true,
                    c_sizeChartID: 'mens-clothing',
                    c_slotBannerImage:
                        'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw46dfe0ad/images/slot/landing/cat-landing-slotbottom-mens-jackets.jpg'
                },
                {
                    _type: 'category',
                    id: 'mens-clothing-dress-shirts',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw2edc3531/images/slot/sub_banners/cat-banner-mens-shirts.jpg',
                    name: 'Dress Shirts',
                    page_description:
                        "Shop Men's dress shirts in a variety of colors and styles including striped, button down, non-iron & more at Commerce Cloud",
                    page_title: "Men's Dress Shirts including Striped, Button Down, Non-Iron & More",
                    parent_category_id: 'mens-clothing',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'mens',
                            name: 'Mens'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing',
                            name: 'Clothing'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing-dress-shirts',
                            name: 'Dress Shirts'
                        }
                    ],
                    c_enableCompare: true,
                    c_showInMenu: true,
                    c_slotBannerImage:
                        'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwc48aefd2/images/slot/landing/cat-landing-slotbottom-mens-dressshirts.jpg'
                },
                {
                    _type: 'category',
                    id: 'mens-clothing-shorts',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwc0e136d4/images/slot/sub_banners/cat-banner-mens-shorts.jpg',
                    name: 'Shorts',
                    page_description: "Shop Men's spring shorts in cotton. Variety of different fits at Commerce Cloud",
                    page_title: "Men's Spring Shorts",
                    parent_category_id: 'mens-clothing',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'mens',
                            name: 'Mens'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing',
                            name: 'Clothing'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing-shorts',
                            name: 'Shorts'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true,
                    c_slotBannerImage:
                        'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwf1b7714e/images/slot/landing/cat-landing-slotbottom-mens-shorts.jpg'
                },
                {
                    _type: 'category',
                    id: 'mens-clothing-pants',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw3d0669c3/images/slot/sub_banners/cat-banner-mens-pants.jpg',
                    name: 'Pants',
                    page_description:
                        "Shop Men's Trousers. Practical, easy-to-wear styles wherever you're headed. Check out Commerce Cloud's famous rugged, long-lasting trousers, jeans, cargo pants and more at Commerce Cloud.",
                    page_keywords:
                        'mens pants, mens khaki pants, mens cargo pants, combat trousers, combat pants, combats, mens casual pants, mens jeans, mens denim jeans',
                    page_title: "Men's Pants Including Khakis, Cargos, Trousers, Jeans & More",
                    parent_category_id: 'mens-clothing',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'mens',
                            name: 'Mens'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing',
                            name: 'Clothing'
                        },
                        {
                            _type: 'path_record',
                            id: 'mens-clothing-pants',
                            name: 'Pants'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true,
                    c_sizeChartID: 'mens-clothing',
                    c_slotBannerImage:
                        'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwe6255151/images/slot/landing/cat-landing-slotbottom-mens-pants.jpg'
                }
            ],
            id: 'mens-clothing',
            image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwf96b65bb/images/slot/sub_banners/cat-banner-mens-clothing.jpg',
            name: 'Clothing',
            page_description:
                "Shop Men's Clothing. Relaxed, timeless classics you can rely on; from denim to corduroys and sweaters to shirts. Huge range of contemporary colours and eco-aware designs: great casualwear at Commerce Cloud.",
            page_keywords: 'mens outerwear, mens tops, mens bottoms',
            page_title: 'Mens Clothing Including Suits, Tops, Bottoms & More',
            parent_category_id: 'mens',
            parent_category_tree: [
                {
                    _type: 'path_record',
                    id: 'mens',
                    name: 'Mens'
                },
                {
                    _type: 'path_record',
                    id: 'mens-clothing',
                    name: 'Clothing'
                }
            ],
            c_enableCompare: false,
            c_showInMenu: true
        },
        {
            _type: 'category',
            categories: [
                {
                    _type: 'category',
                    id: 'womens-jewelry-earrings',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw5db7a889/images/slot/sub_banners/cat-banner-womens-earrings.jpg',
                    name: 'Earrings',
                    page_description:
                        "Shop Women's earrings in a variety of colors and styles including button, clip on and curved at Commerce Cloud.",
                    page_title: "Women's Earrings including Button Clip-on, Curved & More",
                    parent_category_id: 'womens-jewelry',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'womens',
                            name: 'Womens'
                        },
                        {
                            _type: 'path_record',
                            id: 'womens-jewelry',
                            name: 'Jewelry'
                        },
                        {
                            _type: 'path_record',
                            id: 'womens-jewelry-earrings',
                            name: 'Earrings'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true
                },
                {
                    _type: 'category',
                    id: 'womens-jewelry-bracelets',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw32645af9/images/slot/sub_banners/cat-banner-womens-braclets.jpg',
                    name: 'Bracelets',
                    page_description:
                        "Shop Women's bracelets in a variety of colors and styles including stretched, beaded, cuff & more at Commerce Cloud.",
                    page_title: "Women's Bracelets including Stretched, Cuff, Beaded & More",
                    parent_category_id: 'womens-jewelry',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'womens',
                            name: 'Womens'
                        },
                        {
                            _type: 'path_record',
                            id: 'womens-jewelry',
                            name: 'Jewelry'
                        },
                        {
                            _type: 'path_record',
                            id: 'womens-jewelry-bracelets',
                            name: 'Bracelets'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true
                },
                {
                    _type: 'category',
                    id: 'womens-jewelry-necklaces',
                    image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwca0ed768/images/slot/sub_banners/cat-banner-womens-necklaces.jpg',
                    name: 'Necklaces',
                    page_description:
                        "Shop Women's neclaces in a variety of colors and styles including drop, dangled & more at Commerce Cloud.",
                    page_title: "Women's Necklaces including Drop, Dangle & More",
                    parent_category_id: 'womens-jewelry',
                    parent_category_tree: [
                        {
                            _type: 'path_record',
                            id: 'womens',
                            name: 'Womens'
                        },
                        {
                            _type: 'path_record',
                            id: 'womens-jewelry',
                            name: 'Jewelry'
                        },
                        {
                            _type: 'path_record',
                            id: 'womens-jewelry-necklaces',
                            name: 'Necklaces'
                        }
                    ],
                    c_enableCompare: false,
                    c_showInMenu: true
                }
            ],
            id: 'womens-jewelry',
            image: 'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dw433c0977/images/slot/sub_banners/cat-banner-womens-jewelry.jpg',
            name: 'Jewelry',
            page_description: "Shop Women's jewelery including earrings, bracelets and necklaces in a variety of colors and sizes",
            page_title: "Women's Jewelry including Earrings, Bracelets and Necklaces.",
            parent_category_id: 'womens',
            parent_category_tree: [
                {
                    _type: 'path_record',
                    id: 'womens',
                    name: 'Womens'
                },
                {
                    _type: 'path_record',
                    id: 'womens-jewelry',
                    name: 'Jewelry'
                }
            ],
            c_enableCompare: false,
            c_showInMenu: true,
            c_slotBannerImage:
                'https://my.salesforce-commerce-cloud.com/on/demandware.static/-/Sites-storefront-catalog-m-non-en/default/dwc52ad2c1/images/slot/landing/cat-landing-slotbottom-womens-jewelry.jpg'
        }
    ],
    total: 2
};
