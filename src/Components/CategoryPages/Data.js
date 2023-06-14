export const CATEGORIES = {
    'ALL': {
        name: 'all'
    },
    'CUSTOM': {
        name: "custom",
    },
    'ICP': {
        name: 'ICP'
    },
    'MISSION': {
        name: 'mission'
    },
    'PRODUCT': {
        name: 'product'
    }
}


export const categoryData = [
    {
        id: 1,
        topic:
            "The importance of Establishing a Strong Online Presence for Small Businesses",
        category: CATEGORIES.ICP.name,
        keywords: [
            {
                label: "online presence",

            },
            {
                label: "small businesses",

            },
            {
                label: "digital marketing",

            },
            {
                label: "branding",

            },
        ],
        data: 'Lorem ipsum'
    },
    {
        id: 2,
        topic: "Affordable Branding Solutions for Startups and Entrepreneurs",
        category: CATEGORIES.ICP.name,
        keywords: [
            {
                label: "affordable branding",

            },
            {
                label: "startups",

            },
            {
                label: "entrepreneurs",

            },
            {
                label: "logo design",

            },
            {
                label: "website design",

            },
        ]
    },
    {
        id: 3,
        topic:
            "How Fast Turnaround Times in Logo and Website Design Benefit your Business",
        category: CATEGORIES.CUSTOM.name,
        keywords: [
            {
                label: "fast turnaround",

            },
            {
                label: "logo design",

            },
            {
                label: "website design",

            },
            {
                label: "branding",

            },
        ],
         
    },
    {
        id: 4,
        topic:
            "The Benefits of Comprehensive Branding Services forSsmall to Medium-Sized Businesses",
            category: CATEGORIES.PRODUCT.name,
        keywords: [
            {
                label: "comprehensive branding",

            },
            {
                label: "small businesses",

            },
            {
                label: "logo design",

            },
            {
                label: "website design",

            },
            {
                label: "social media management",

            },
        ],
         
    },
    {
        id: 5,
        topic:
            "Expert Tips for Choosing the Right Digital Marketing Agency for Your Business",
        category: CATEGORIES.MISSION.name,
        keywords: [
            {
                label: "digital marketing agency",

            },
            {
                label: "tips",

            },
            {
                label: "branding",

            },
            {
                label: "website design",

            },
            {
                label: "social media management",

            },
        ],
         
    },
];


export const topNav = Object.values(CATEGORIES);


