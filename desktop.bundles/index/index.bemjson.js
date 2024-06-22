({
    block: 'page',
    title: 'Search service',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'find them all' }},
        { elem: 'css', url: 'index.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.js' }],
    content: {
        block: 'service',
        content: [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'logo',
                        content: [
                            'Search service'
                        ]
                    },
                    {
                        block: 'form',
                        content: [
                            {
                                elem: 'search',
                                content: [
                                    {
                                        block: 'input',
                                        mods: { 'has-clear' : true },
                                        name: 'query',
                                        val: 'Coffee',
                                        placeholder: ''
                                    },
                                    {
                                        block: 'button',
                                        mods: { type: 'submit' },
                                        text: 'Search'
                                    }
                                ]
                            }                            
                        ]
                    }
                ]
            },
            {
                elem: 'content',
                content: (function() {
                    return [
                        {
                            "position": 1,
                            "title": "Coffee",
                            "link": "https://en.wikipedia.org/wiki/Coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECBwQAQ",
                            "displayed_link": "https://en.wikipedia.org › wiki › Coffee",
                            "thumbnail": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e925f47f31dc7d4c3c8f63dd7e3963563b4.jpeg",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9298e107155699c24b64d55e3733f13200.png",
                            "snippet": "Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "sitelinks":
                            {
                                "inline":
                                [
                                    {
                                        "title": "Coffee bean",
                                        "link": "https://en.wikipedia.org/wiki/Coffee_bean"
                                    }
                                    ,
                                    {
                                        "title": "History",
                                        "link": "https://en.wikipedia.org/wiki/History_of_coffee"
                                    }
                                    ,
                                    {
                                        "title": "Coffee production",
                                        "link": "https://en.wikipedia.org/wiki/Coffee_production"
                                    }
                                    ,
                                    {
                                        "title": "Coffee preparation",
                                        "link": "https://en.wikipedia.org/wiki/Coffee_preparation"
                                    }
                                ]
                            }
                            ,
                            "source": "Wikipedia"
                        }
                        ,
                        {
                            "position": 2,
                            "title": "What is Coffee?",
                            "link": "https://www.ncausa.org/About-Coffee/What-is-Coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ncausa.org/About-Coffee/What-is-Coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECHsQAQ",
                            "displayed_link": "https://www.ncausa.org › About Coffee",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9mGEiLrFPJTDgxbtySMTOc3UNvBpZhZ7IzhkzBRVYS-CBxbj9EVa&usqp=CAE&s",
                            "snippet": "Coffee traces its origin to a genus of plants known as Coffea. Within the genus there are over 500 genera and 6,000 species of tropical trees and shrubs.",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "sitelinks":
                            {
                                "inline":
                                [
                                    {
                                        "title": "History",
                                        "link": "https://www.ncausa.org/About-Coffee/History-of-Coffee"
                                    }
                                    ,
                                    {
                                        "title": "National Coffee Association USA",
                                        "link": "https://www.ncausa.org/about-coffee/coffee-around-the-world"
                                    }
                                    ,
                                    {
                                        "title": "10 Steps from Seed to Cup",
                                        "link": "https://www.ncausa.org/about-coffee/10-steps-from-seed-to-cup"
                                    }
                                ]
                            }
                            ,
                            "source": "National Coffee Association"
                        }
                        ,
                        {
                            "position": 3,
                            "title": "Starbucks Coffee Company",
                            "link": "https://www.starbucks.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.starbucks.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECGEQAQ",
                            "displayed_link": "https://www.starbucks.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnWTzjVhlRgH7jfQOv8AeWxTWJN4o1XHVc7WkxXLpYt_t0jGzSHon&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e929ff88074c582793383c5c299de241786.png",
                            "snippet": "More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Starbucks"
                        }
                        ,
                        {
                            "position": 4,
                            "title": "The Coffee Bean & Tea Leaf | CBTL",
                            "link": "https://coffeebean.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://coffeebean.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCJ0BEAE",
                            "displayed_link": "https://coffeebean.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e927f7c5c70972c7b9e27f579e3a4308410.png",
                            "snippet": "Born and brewed in Southern California since 1963, The Coffee Bean & Tea Leaf® is passionate about connecting loyal customers with carefully handcrafted ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "source": "The Coffee Bean & Tea Leaf"
                        }
                        ,
                        {
                            "position": 5,
                            "title": "Coffee | Origin, Types, Uses, History, & Facts",
                            "link": "https://www.britannica.com/topic/coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.britannica.com/topic/coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCLYBEAE",
                            "displayed_link": "https://www.britannica.com › ... › Food",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9292800f68610346f5157d40e52d634a4b.png",
                            "date": "Apr 24, 2024",
                            "snippet": "Coffee, beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant of African origin. Coffee is one of the ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "Coffee"
                            ]
                            ,
                            "source": "Britannica"
                        }
                        ,
                        {
                            "position": 6,
                            "title": "Peet's Coffee | The Original Craft Coffee, Est. 1966",
                            "link": "https://www.peets.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.peets.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECC4QAQ",
                            "displayed_link": "https://www.peets.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92a737e361e35b545df68e13398463d063.png",
                            "snippet": "Since 1966, Peet's Coffee has source and offered superior coffees and teas and adhering to strict high-quality and taste standards. Shop today.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffees"
                            ]
                            ,
                            "source": "Peet's Coffee"
                        }
                        ,
                        {
                            "position": 7,
                            "title": "Coffee health benefits: Diabetes, heart health, liver cancer, ...",
                            "link": "https://www.medicalnewstoday.com/articles/270202",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.medicalnewstoday.com/articles/270202&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCMYBEAE",
                            "displayed_link": "https://www.medicalnewstoday.com › articles",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8URs8EHOjTtsp6Z5L2PYyW1dpJeMK56lCGpQOKXBIa1bjWBSbB1tW&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e925d4cf00c4e719e3aa7f13efee9301dd2.png",
                            "snippet": "In some cases, coffee may be good for health, as it may offer benefits such as lowering the risk of type 2 diabetes and helping people lose weight.",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Medical News Today"
                        }
                        ,
                        {
                            "position": 8,
                            "title": "Counter Culture Coffee",
                            "link": "https://counterculturecoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://counterculturecoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECGIQAQ",
                            "displayed_link": "https://counterculturecoffee.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wWCPhl02mI_0X2u65xWFQapKDSF3t0jX7y4b6vtvzrZ4VCtibRWJ&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92d125447e46bf0aff3b3be8a47e696042.png",
                            "snippet": "Counter Culture Coffee is a specialty coffee roaster sourcing exceptional single-origin and specialty coffee. Fresh-roasted coffee to your doorstep.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "free_day_delivery": 1
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "Free 1–4 day delivery"
                                    ]
                                }
                            }
                            ,
                            "source": "Counter Culture Coffee"
                        }
                        ,
                        {
                            "position": 9,
                            "title": "Coffee Beanery | Flavored Coffees & Coffee Gift Baskets",
                            "link": "https://www.coffeebeanery.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.coffeebeanery.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCIYBEAE",
                            "displayed_link": "https://www.coffeebeanery.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRK_BgUXIkDYxS9oLwFEFrioqeARpYi3XBpfTsPJoki8FmUVJK-xqg&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9299884648faf4e2a9d86833370c362228.png",
                            "snippet": "40+ Flavored Coffees & Coffee Pods | Gourmet Coffee Gift Baskets | Swiss Water Process Decaf Coffee | 100% Specialty Arabica Coffee Roasts | Since 1976.",
                            "snippet_highlighted_words":
                            [
                                "Coffees",
                                "Coffee",
                                "Coffee",
                                "Coffee",
                                "Coffee"
                            ]
                            ,
                            "sitelinks":
                            {
                                "inline":
                                [
                                    {
                                        "title": "Coffee",
                                        "link": "https://www.coffeebeanery.com/collections/coffee"
                                    }
                                    ,
                                    {
                                        "title": "Flavored Coffee",
                                        "link": "https://www.coffeebeanery.com/collections/flavored-coffee"
                                    }
                                    ,
                                    {
                                        "title": "Specialty Coffee",
                                        "link": "https://www.coffeebeanery.com/collections/right-roast-specialty-coffee"
                                    }
                                    ,
                                    {
                                        "title": "Coffee Makers",
                                        "link": "https://www.coffeebeanery.com/collections/coffee-makers-french-press-pour-over"
                                    }
                                ]
                            }
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 100,
                                        "currency": "Free delivery over $",
                                        "unknown": 14
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "Free delivery over $100",
                                        "14",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Coffee Beanery"
                        }
                        ,
                        {
                            "position": 10,
                            "title": "The History of Coffee",
                            "link": "https://www.ncausa.org/About-Coffee/History-of-Coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ncausa.org/About-Coffee/History-of-Coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCLUBEAE",
                            "displayed_link": "https://www.ncausa.org › About Coffee",
                            "snippet": "Coffee grown worldwide can trace its heritage back centuries to the ancient coffee forests on the Ethiopian plateau. There, legend says the goat herder Kaldi ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "source": "National Coffee Association"
                        }
                        ,
                        {
                            "position": 11,
                            "title": "9 Health Benefits of Coffee, Based on Science",
                            "link": "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCL0BEAE",
                            "displayed_link": "https://www.healthline.com › nutrition › top-evidence-b...",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG29e5NyWmCjY7zpKGVnpCRY_y99jycgqZj9pj9JmlZJ631fTQ3ZcT&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92ef9a4e56553ebd4583bb323d03cf79d1.png",
                            "date": "Jan 11, 2022",
                            "snippet": "9 Unique Benefits of Coffee · 1. Boosts energy levels · 2. May be linked to a lower risk of type 2 diabetes · 3. Could support brain health · 4.",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "source": "Healthline"
                        }
                        ,
                        {
                            "position": 12,
                            "title": "Study seems to confirm secret ingredient for better coffee",
                            "link": "https://www.cnn.com/2023/12/25/world/perfect-coffee-water-ross-droplet-technique-wellness-scn/index.html",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.cnn.com/2023/12/25/world/perfect-coffee-water-ross-droplet-technique-wellness-scn/index.html&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECC8QAQ",
                            "displayed_link": "https://www.cnn.com › 2023/12/25 › world › perfect-c...",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxLtjSrFPvlSi2GipP6qP-9N_hf_JOPNhkuPFIQBLa6vqLOs-BRJP&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92953b1170099f95bc51e0e609df95002f.png",
                            "date": "Dec 25, 2023",
                            "snippet": "Study seems to confirm secret ingredient for better coffee ... Coffee connoisseurs have long held the belief that adding a little water to the ...",
                            "snippet_highlighted_words":
                            [
                                "coffee",
                                "Coffee"
                            ]
                            ,
                            "source": "CNN"
                        }
                        ,
                        {
                            "position": 13,
                            "title": "Coffee",
                            "link": "https://www.amazon.com/coffee/s?k=coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.amazon.com/coffee/s%3Fk%3Dcoffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECEYQAQ",
                            "displayed_link": "https://www.amazon.com › coffee › k=coffee",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnPGMhU-OjG6jRoGpjaBzjGMgJDi79Ol1rj0Ew0x8_UPN-CwVK2lG&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e925ba31539be65b98bea5f2eef5e9a8e79.png",
                            "snippet": "Amazon Fresh Organic Fair Trade Peru Ground Coffee, Medium Roast, 12 Ounce ... This product has sustainability features recognized by trusted certifications.",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "store_rating_k": 4.5,
                                        "price": 5,
                                        "currency": "$ to $",
                                        "unknown": 30
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "4.5store rating (4.7K)",
                                        "$5 to $35",
                                        "30",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Amazon.com"
                        }
                        ,
                        {
                            "position": 14,
                            "title": "Cartel Roasting Co: Home",
                            "link": "https://cartelroasting.co/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://cartelroasting.co/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECEUQAQ",
                            "displayed_link": "https://cartelroasting.co",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdv9Hc-iuFEoV1E-zNEgASdCqYLwUBI0AVOtZB9niyrEcPyFxWwkb8&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e921057fedd35619b4e555776f5f0f757bd.jpeg",
                            "snippet": "Indulge in the rich, nuanced taste of specialty coffee at Cartel Roasting Co., Phoenix's ultimate coffee roaster. Our team scours the globe to source only ...",
                            "snippet_highlighted_words":
                            [
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 4.5,
                                        "currency": "$ – day delivery"
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "$4.50 2–5 day delivery"
                                    ]
                                }
                            }
                            ,
                            "source": "Cartel Roasting Co"
                        }
                        ,
                        {
                            "position": 15,
                            "title": "Portrait Coffee: Join Us in Pouring a New Narrative",
                            "link": "https://portrait.coffee/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://portrait.coffee/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECE4QAQ",
                            "displayed_link": "https://portrait.coffee",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiawkDXmHG_GqqikJgOV1PjP-EIcr9_uHdFxyHBAnUwwtmPY-HA9d6&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9231377428ff91a2a664f9f9ae88f38770.png",
                            "snippet": "Browse Portrait Coffee's variety of single-origin coffees, blends, and merchandise. Join us in pouring a new narrative in the specialty coffee industry.",
                            "snippet_highlighted_words":
                            [
                                "Coffee's",
                                "coffees",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 50,
                                        "currency": "Free delivery over $",
                                        "unknown": 30
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "Free delivery over $50",
                                        "30",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Portrait Coffee"
                        }
                        ,
                        {
                            "position": 16,
                            "title": "Coffee - The Nutrition Source",
                            "link": "https://nutritionsource.hsph.harvard.edu/food-features/coffee/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://nutritionsource.hsph.harvard.edu/food-features/coffee/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECGQQAQ",
                            "displayed_link": "https://nutritionsource.hsph.harvard.edu › food-features",
                            "snippet": "The bottom line: A large body of evidence suggests that consumption of caffeinated coffee does not increase the risk of cardiovascular diseases and cancers. In ...",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Harvard University"
                        }
                        ,
                        {
                            "position": 17,
                            "title": "9 Reasons Why (the Right Amount of) Coffee Is Good for You",
                            "link": "https://www.hopkinsmedicine.org/health/wellness-and-prevention/9-reasons-why-the-right-amount-of-coffee-is-good-for-you",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.hopkinsmedicine.org/health/wellness-and-prevention/9-reasons-why-the-right-amount-of-coffee-is-good-for-you&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCIcBEAE",
                            "displayed_link": "https://www.hopkinsmedicine.org › health › 9-reasons-w...",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqLb_54jkXdfimtjn-PlONI2h48XT-4G2nKPhymOp1TJmZVrWEbJB&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e920de275e63380be83f149c3f7734387ab.png",
                            "snippet": "What are the top health benefits of drinking coffee? · You could live longer. · Your body may process glucose (or sugar) better. · You're less likely to develop ...",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Johns Hopkins Medicine"
                        }
                        ,
                        {
                            "position": 18,
                            "title": "Community Coffee | #1 Family-Owned Retail Coffee Brand ...",
                            "link": "https://www.communitycoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.communitycoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCJABEAE",
                            "displayed_link": "https://www.communitycoffee.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGkx_-ExGecHvXbsyqZYd4BEkukOpGRXKPJpVWVuMexlj0SrkgO3-&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92746d33bc43545bcb5315d0313bcd15c3.png",
                            "snippet": "At Community Coffee, we've discovered the recipe for the perfect cup of coffee: rich heritage, premium coffee beans, and dedication to our community.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Community Coffee"
                        }
                        ,
                        {
                            "position": 19,
                            "title": "Honolulu Coffee: Best Kona Coffee",
                            "link": "https://www.honolulucoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.honolulucoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCJ8BEAE",
                            "displayed_link": "https://www.honolulucoffee.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8z_huBOguiam1LDkHAkVT7isQl3vLkZ0U-ORyWEa9OKRsF7RGahtd&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9248814b3d02209910100d46aadffb3928.png",
                            "snippet": "Enjoy Hawaiian Kona coffee beans right from our farm to your cup! We roast our beans daily at our Experience Center to provide you with the freshest coffee ...",
                            "snippet_highlighted_words":
                            [
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 5,
                                        "currency": "$ delivery",
                                        "unknown": 30
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "$5 delivery",
                                        "30",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Honolulu Coffee"
                        }
                        ,
                        {
                            "position": 20,
                            "title": "Caribou Coffee® | Life Is Short. Stay Awake For It®",
                            "link": "https://www.cariboucoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.cariboucoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCJ4BEAE",
                            "displayed_link": "https://www.cariboucoffee.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4LNLhKX3FQikXb_G6wGnNmKc5a2LHsxf1U70UQdyYUv4dRZiO6qj&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92591f6c2035640aeb42fdc206797688b7.png",
                            "snippet": "Caribou Coffee® is more than a premium coffeehouse featuring high-quality, handcrafted beverages and food. Explore our menu, sign up for Caribou Coffee® ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "Coffee"
                            ]
                            ,
                            "source": "Caribou Coffee"
                        }
                        ,
                        {
                            "position": 21,
                            "title": "Philz Coffee: Home",
                            "link": "https://philzcoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://philzcoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCKABEAE",
                            "displayed_link": "https://philzcoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92dacec40bca61453cc408106faf654eb2.png",
                            "snippet": "We specialize in customized blends with coffee shops in California and Chicago, IL Buy coffee online or find your nearest Philz location.",
                            "snippet_highlighted_words":
                            [
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 1,
                                        "currency": "Free – day delivery over $",
                                        "unknown": 30
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "Free 1–3 day delivery over $26.91",
                                        "30",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Philz Coffee"
                        }
                        ,
                        {
                            "position": 22,
                            "title": "COFFEE - Uses, Side Effects, and More",
                            "link": "https://www.webmd.com/vitamins/ai/ingredientmono-980/coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.webmd.com/vitamins/ai/ingredientmono-980/coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCKEBEAE",
                            "displayed_link": "https://www.webmd.com › vitamins › ingredientmono-980",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92a9a78f43d364f223771de75fc50000f0.png",
                            "snippet": "By speeding up the nervous system, stimulant medications can increase blood pressure and speed up the heartbeat. Coffee contains caffeine. Caffeine can also ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "source": "WebMD"
                        }
                        ,
                        {
                            "position": 23,
                            "title": "Scooter's Coffee | Be Amazing",
                            "link": "https://www.scooterscoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.scooterscoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCLwBEAE",
                            "displayed_link": "https://www.scooterscoffee.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7hJw1XOMVnnhLTDmWVeMBKbRHiKg4l8aPajNASsyQKhy__2NXdfN&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9209307fdaf13e5a70b97afc72a6f639af.png",
                            "snippet": "Meet You at Home · Ink and Ivory Santos Mug, 12 oz. As low as $12.99. Add to Cart · Summer Tumbler, 32 oz. As low as $19.99. Add to Cart · Signature Blend ...",
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "day_delivery": 2
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "2–9 day delivery"
                                    ]
                                }
                            }
                            ,
                            "source": "Scooter's Coffee"
                        }
                        ,
                        {
                            "position": 24,
                            "title": "Hampton Coffee Company | Espresso Bars & Small Batch ...",
                            "link": "https://hamptoncoffeecompany.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://hamptoncoffeecompany.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCMABEAE",
                            "displayed_link": "https://hamptoncoffeecompany.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKcTnx-hORgAmVrAP3O5s6fJNWgVcLArT8jKK5_a9JLKgC7PtC623&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9283df3cdad06a4e3b73b628ffe98088cd.png",
                            "snippet": "A Hamptons classic since 1994 with local family-owned cafe & espresso bar locations in The Hamptons, the North Fork, and beyond! Small-batch locally-roasted ...",
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "day_delivery": 4
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "4–6 day delivery"
                                    ]
                                }
                            }
                            ,
                            "source": "Hampton Coffee Company"
                        }
                        ,
                        {
                            "position": 25,
                            "title": "Proud Mary Coffee USA - Portland",
                            "link": "https://proudmarycoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://proudmarycoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCN8BEAE",
                            "displayed_link": "https://proudmarycoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e921e835109ca3f83faa7b3f80822a968a2.png",
                            "snippet": "Proud Mary Coffee USA. Buy Specialty Coffee and Geisha including coffee subscription. Roasted in Portland, Oregon.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 17,
                                        "currency": "$ to $",
                                        "day_delivery": 6,
                                        "unknown": 14
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "$17 to $50",
                                        "6–9 day delivery",
                                        "14",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Proud Mary Coffee USA"
                        }
                        ,
                        {
                            "position": 26,
                            "title": "Sightglass Coffee - San Francisco",
                            "link": "https://sightglasscoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://sightglasscoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCOUBEAE",
                            "displayed_link": "https://sightglasscoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e920ddaa25af567b4089e32f6f8c51275a0.png",
                            "snippet": "We specialize in small-batch coffee that is roasted to order in California. Our coffee is sourced directly from producers worldwide who share our commitment ...",
                            "snippet_highlighted_words":
                            [
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 3,
                                        "currency": "Free – day delivery over $",
                                        "unknown": 15
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "Free 3–5 day delivery over $45",
                                        "15",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Sightglass Coffee"
                        }
                        ,
                        {
                            "position": 27,
                            "title": "Bones Coffee Company - Say Goodbye to Boring.",
                            "link": "https://www.bonescoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.bonescoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCNoBEAE",
                            "displayed_link": "https://www.bonescoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e921ab4c62cfd2fecfb8601c59b9bc00305.png",
                            "snippet": "A 12 ounce bag of Bones Coffee S'morey Time flavored coffee. It is. Rated 4.8 out of 5.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 6,
                                        "currency": "Free – day delivery over $",
                                        "unknown": 30
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "Free 6–7 day delivery over $75",
                                        "30",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Bones Coffee Company"
                        }
                        ,
                        {
                            "position": 28,
                            "title": "Specialty Coffee Association",
                            "link": "https://sca.coffee/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://sca.coffee/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECEIQAQ",
                            "displayed_link": "https://sca.coffee",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92d802e855251a2fa5a8089e8f1b2d69da.png",
                            "snippet": "The Specialty Coffee Association is a nonprofit, membership-based organization that represents thousands of coffee professionals, from producers to baristas ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Specialty Coffee Association"
                        }
                        ,
                        {
                            "position": 29,
                            "title": "Onyx Coffee Lab",
                            "link": "https://onyxcoffeelab.com/collections/coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://onyxcoffeelab.com/collections/coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCNgBEAE",
                            "displayed_link": "https://onyxcoffeelab.com › collections › coffee",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e928b3624280e0e0acf4a11a6a69f6cae26.png",
                            "snippet": "We've taken weighing to the tenth of a gram out of your hands so that each cup is perfect. We suggest trying Onyx Tealight which has organic oats and honey ...",
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 19,
                                        "currency": "$ to $",
                                        "day_delivery": 6,
                                        "unknown": 14
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "$19 to $75",
                                        "6–9 day delivery",
                                        "14",
                                        "day returns"
                                    ]
                                }
                            }
                            ,
                            "source": "Onyx Coffee Lab"
                        }
                        ,
                        {
                            "position": 30,
                            "title": "Coffee Roasted Daily | Stumptown Coffee Roasters",
                            "link": "https://www.stumptowncoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.stumptowncoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECEQQAQ",
                            "displayed_link": "https://www.stumptowncoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e926c3154e4a5c89e882879492bc5fbaf46.png",
                            "snippet": "Stumptown Coffee Roasters highest quality fresh roasted coffee; learn to brew, subscribe, or visit us in Portland, New York, and Los Angeles.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Stumptown Coffee"
                        }
                        ,
                        {
                            "position": 31,
                            "title": "Black Rifle Coffee | Veteran Founded",
                            "link": "https://www.blackriflecoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.blackriflecoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECEMQAQ",
                            "displayed_link": "https://www.blackriflecoffee.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLBwOE1b8c-MY6upZHH77AEL0CAMGfCGTy5DLbzCX_uuaANkq8WcT&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e929db11865ecbaa2b825ddafb8dada9f08.png",
                            "snippet": "Black Rifle Coffee Company is a SOF veteran-founded coffee company, serving premium coffee and culture to people who love America.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Black Rifle Coffee"
                        }
                        ,
                        {
                            "position": 32,
                            "title": "BUT FIRST, COFFEE. - Los Angeles",
                            "link": "https://alfred.la/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://alfred.la/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECE8QAQ",
                            "displayed_link": "https://alfred.la",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzh3J6Jgmf9QIek2TeuDC5Q5ks_QmDIr9rmNmQD8OAAQNFe2DsTVH&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e925b5059fc44bb83d6cd840a76a680cef4.png",
                            "snippet": "Since opening on Melrose Place in 2013, Alfred has made waves with its sleek decors, killer customer service, and innovative coffee and tea drinks.",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "day_delivery": 5
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "5–8 day delivery"
                                    ]
                                }
                            }
                            ,
                            "source": "alfred.la"
                        }
                        ,
                        {
                            "position": 33,
                            "title": "Dutch Bros: Home",
                            "link": "https://www.dutchbros.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.dutchbros.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCL8BEAE",
                            "displayed_link": "https://www.dutchbros.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9224a4c8cf6c7b1280ce6bdece0a3dc42e.png",
                            "snippet": "Dutch Bros Coffee is a drive-through coffee chain headquartered in Grants Pass, Oregon, with company-owned and franchise locations throughout the United ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Dutch Bros"
                        }
                        ,
                        {
                            "position": 34,
                            "title": "Your Ultimate Guide to Different Types of Coffee",
                            "link": "https://www.tasteofhome.com/article/types-of-coffee/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.tasteofhome.com/article/types-of-coffee/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCL4BEAE",
                            "displayed_link": "https://www.tasteofhome.com › ... › Beverages › Coffee",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXX9eW2XcoXWgbCTV8yXEEtxWTUMJVyFWFvNPbP_AgkXRbT_XtiG3j&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92f6413d8c37bfa4a8537c5dc1722ef444.png",
                            "date": "Feb 25, 2020",
                            "snippet": "Types of Coffee Drinks · Black · Latte · Cappuccino · Americano · Espresso · Doppio · Cortado · Red Eye. Named after those pesky midnight ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "source": "Taste of Home"
                        }
                        ,
                        {
                            "position": 35,
                            "title": "Health Benefits of Coffee",
                            "link": "https://www.rush.edu/news/health-benefits-coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.rush.edu/news/health-benefits-coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECGMQAQ",
                            "displayed_link": "https://www.rush.edu › news › health-benefits-coffee",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZp6ucx4qdcVox0UX244U0t32CY-PYOM6u083Oe4tnddV1I1_o1a0&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e924a27a431bb2335fe1b04df4ed5fae877.png",
                            "snippet": "What health benefits does coffee offer? · 1. Improve overall health. · 2. Protect against Type 2 diabetes. · 3. Control Parkinson's disease symptoms. · 4. Slow ...",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Rush University Medical Center"
                        }
                        ,
                        {
                            "position": 36,
                            "title": "Trade Coffee: Shop Coffee | Coffee Subscription | Trade",
                            "link": "https://www.drinktrade.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.drinktrade.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECGUQAQ",
                            "displayed_link": "https://www.drinktrade.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiegFKLDd5QI8cI8Zzs910qO04bpg4DWv0cclrd2ZUw7n76TlLdms&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92ccf810764339320bb226a5d25b9a1a25.png",
                            "snippet": "Trade has 450+ coffees expertly crafted by the country's top specialty roasters. Try us for one month and save 30% on your tailored plan.",
                            "snippet_highlighted_words":
                            [
                                "coffees"
                            ]
                            ,
                            "source": "Trade Coffee"
                        }
                        ,
                        {
                            "position": 37,
                            "title": "Coffee Definition & Meaning",
                            "link": "https://www.merriam-webster.com/dictionary/coffee",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.merriam-webster.com/dictionary/coffee&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECHoQAQ",
                            "displayed_link": "https://www.merriam-webster.com › dictionary › coffee",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiWoRdIVD-pKXYfi0ZZMdROaRSk1cFOc2S-Yq1Dpvkf6wnmoipfdm&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92fb8cedc7bc03de77112dfb06189cd57d.png",
                            "date": "May 15, 2024",
                            "snippet": "The meaning of COFFEE is a beverage made by percolation, infusion, or decoction from the roasted and ground seeds of a coffee plant.",
                            "snippet_highlighted_words":
                            [
                                "COFFEE",
                                "coffee"
                            ]
                            ,
                            "source": "Merriam-Webster"
                        }
                        ,
                        {
                            "position": 38,
                            "title": "Fresh Roasted Coffee | Intelligentsia | Illuminating Coffee",
                            "link": "https://www.intelligentsia.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.intelligentsia.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECGkQAQ",
                            "displayed_link": "https://www.intelligentsia.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e920abc4a4455e0201c12699c967efcf720.png",
                            "snippet": "Thoughtfully sourced, freshly roasted and proudly poured. We work every day to bring you the finest direct trade and in season coffee available.",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Intelligentsia Coffee"
                        }
                        ,
                        {
                            "position": 39,
                            "title": "Coffea",
                            "link": "https://en.wikipedia.org/wiki/Coffea",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Coffea&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCIABEAE",
                            "displayed_link": "https://en.wikipedia.org › wiki › Coffea",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92b5fc13d37d30b6e64f98193a238fe5f3.png",
                            "snippet": "For the beverage, see Coffee. Coffea is a genus of flowering plants in the family Rubiaceae. Coffea species are shrubs or small trees native to tropical and ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee"
                            ]
                            ,
                            "source": "Wikipedia"
                        }
                        ,
                        {
                            "position": 40,
                            "title": "r/Coffee",
                            "link": "https://www.reddit.com/r/Coffee/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.reddit.com/r/Coffee/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCIEBEAE",
                            "displayed_link": "1.7M+ followers",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9234840b4d16670a4c62a0998072d87ff1.png",
                            "snippet": "r/Coffee: /r/Coffee is back - for now - and talking about itself, in addition to coffee.",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Reddit · r/Coffee"
                        }
                        ,
                        {
                            "position": 41,
                            "title": "Folgers Coffee",
                            "link": "https://www.folgerscoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.folgerscoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCJcBEAE",
                            "displayed_link": "https://www.folgerscoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9244b4aa30971cdce916560aadacb3d82f.png",
                            "snippet": "That's right, it's Folgers®. Discover your irresistible variety of the coffee that's loved by millions.",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Folgers Coffee"
                        }
                        ,
                        {
                            "position": 42,
                            "title": "Steeped Coffee | Specialty Single-Serve Bags | Steeped ...",
                            "link": "https://steepedcoffee.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://steepedcoffee.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCIQBEAE",
                            "displayed_link": "https://steepedcoffee.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e928ffa4444b470c90c334edc430e25b7e2.png",
                            "snippet": "Easily make a perfect cup of coffee anywhere in minutes with Steeped Coffee Packs. Convenience and quality meet with our single-serve packs.",
                            "snippet_highlighted_words":
                            [
                                "coffee",
                                "Coffee"
                            ]
                            ,
                            "source": "Steeped Coffee"
                        }
                        ,
                        {
                            "position": 43,
                            "title": "Miguel - Coffee (Official Video)",
                            "link": "https://www.youtube.com/watch?v=9Z55sZ2oVY4",
                            "displayed_link": "46.3M+ views · 8 years ago",
                            "thumbnail": "https://i.ytimg.com/vi/9Z55sZ2oVY4/mqdefault.jpg?sqp=-oaymwEFCJQBEFM&rs=AMzJL3mm7_-0PsHkp9InDdAGbgseNSpKWQ",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92304834bb28e02c4359055efc5829b6ad.png",
                            "snippet": "Coffee by Miguel Listen to Miguel: https://Miguel.lnk.to/listenYD Subscribe to the official Miguel YouTube Channel: ...",
                            "duration": "4:55",
                            "video_link": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcR5rS7PP8KWcEfVVwc6Yr-SsskHMmlSpOFSAw",
                            "source": "YouTube · MiguelVEVO"
                        }
                        ,
                        {
                            "position": 44,
                            "title": "Kona Coffee & Tea",
                            "link": "https://www.konacoffeeandtea.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.konacoffeeandtea.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoFCKIBEAE",
                            "displayed_link": "https://www.konacoffeeandtea.com",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92890bacf6dc3a47cee203953ef4c17732.png",
                            "snippet": "Kona Coffee & Tea is a 100% Kona coffee farm, mill, roaster, and cafe serving the best Kona Coffee in Hawaii. Visit our Big Island coffee shop located in ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "Coffee",
                                "coffee"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "detected_extensions":
                                    {
                                        "price": 2,
                                        "currency": "$ delivery"
                                    }
                                    ,
                                    "extensions":
                                    [
                                        "$2 delivery"
                                    ]
                                }
                            }
                            ,
                            "source": "Kona Coffee & Tea"
                        }
                        ,
                        {
                            "position": 45,
                            "title": "All About Coffee - Page 123 - Google Books Result",
                            "link": "https://books.google.com/books?id=Y5tXt7aoLNoC&pg=PA123&lpg=PA123&dq=Coffee&source=bl&ots=Ls0klzGp0C&sig=ACfU3U1TaKkaLqC2El6tL_LhArYy5a8dKA&hl=en&sa=X&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQ6AF6BQjuARAD",
                            "displayed_link": "https://books.google.com › books",
                            "snippet": "... COFFEE HOUSE. Broadway draper in London . You can lodge and board there at a common table , and you pay ten shil- lings currency a day , whether you dine out ...",
                            "snippet_highlighted_words":
                            [
                                "COFFEE"
                            ]
                            ,
                            "rich_snippet":
                            {
                                "top":
                                {
                                    "extensions":
                                    [
                                        "William Harrison Ukers",
                                        "1922",
                                        "Coffee"
                                    ]
                                    ,
                                    "detected_extensions":
                                    {
                                        "unknown": 1922
                                    }
                                }
                            }
                            ,
                            "source": "google.com"
                        }
                        ,
                        {
                            "position": 46,
                            "title": "Coffee Emporium - Cincinnati",
                            "link": "https://www.coffee-emporium.com/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.coffee-emporium.com/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECDMQAQ",
                            "displayed_link": "https://www.coffee-emporium.com",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoAQXxeTgneysxCagjybYPMnlvEX5VrjKVaiuetMiMjd1-zJYe5z3&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e92047bc30358122722774f1ac88dfe2149.png",
                            "snippet": ". Having quickly become an in-house favorite since it arrived here at the end of 2021, Chamí is a naturally-processed coffee from western Colombia, carrying a ...",
                            "snippet_highlighted_words":
                            [
                                "coffee"
                            ]
                            ,
                            "source": "Coffee Emporium"
                        }
                        ,
                        {
                            "position": 47,
                            "title": "Coffee Quality Institute",
                            "link": "https://www.coffeeinstitute.org/",
                            "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.coffeeinstitute.org/&ved=2ahUKEwiGuNr0iquGAxU-EGIAHTXeCWwQFnoECDAQAQ",
                            "displayed_link": "https://www.coffeeinstitute.org",
                            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTlCXNNFrtH44kv_T00uK3eZB3v_kkU-caXVNyWpRX6KKVa0ZT2rr&usqp=CAE&s",
                            "favicon": "https://serpapi.com/searches/66530bc82f542eac3e0415d7/images/23d5573ffcb8a369fe4078b7786a3e9289e07845d7cc8151aa3d33f33a6a1fca.png",
                            "snippet": "Coffee Quality Institute provides coffee education throughout the coffee value chain. Professional certifications and other classes and courses available in ...",
                            "snippet_highlighted_words":
                            [
                                "Coffee",
                                "coffee",
                                "coffee"
                            ]
                            ,
                            "source": "Coffee Quality Institute"
                        }
                    ].map(function(item) {
                        return {
                            block: 'result',
                            content: [
                                {
                                    block: 'link',
                                    url: item.link,
                                    target: '_blank',
                                    content: item.title
                                },
                                {
                                    elem: 'text',
                                    content: item.snippet
                                }
                            ]
                        };
                    });
                })()
            }
        ]
    }
})