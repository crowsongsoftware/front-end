export type BannerItem = {
    url: string;
    imgSrc: string;
    imgAlt: string;
};

export type HomeState = { 
    services: Array<string>;
    banner: Array<BannerItem>;
};

export const defaultState: HomeState = {
    services: [
        `Angular Development`,
        `Express Server Development`,
        `Database Development`
    ],
    banner: [
        {
           url: `https://blacklivesmatter.com/`,
           imgSrc: `/assets/images/blm.png`,
           imgAlt: `Black Lives Matter` 
        },
        {
            url: `https://www.aimovement.org/`,
            imgSrc: `/assets/images/aim_2.png`,
            imgAlt: `American Indian Movement`
        },
        {
            url: `https://mmiwusa.org/`,
            imgSrc: `/assets/images/mmiw.jpg`,
            imgAlt: `Missing and Murdered Indigenous Women`
        },
        {
            url: `https://stopaapihate.org/`,
            imgSrc: `/assets/images/aaip_1.png`,
            imgAlt: `Stop Asian Hate`
        },
        {
            url: `https://freepalestinemovement.org/`,
            imgSrc: `/assets/images/free_palestine_1.png`,
            imgAlt: `Free Palestine`
        }
    ]
};