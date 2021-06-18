export type Section = {
    heading: string;
    paragraphs: Array<string>;
};

export type IntroductionState = {
    imageAlt: string;
    imageClass: string;
    imageHeight: string;
    imagePath: string;
    imageStyles: object;
    imageWidth: string;
    title: string;
    titleStyles: object;
    sections: Array<Section>;
};

export const defaultState:IntroductionState = {
    imageAlt: '',
    imageClass: '',
    imageHeight: '',
    imagePath: '',
    imageStyles: {},
    imageWidth: '',
    title: '',
    titleStyles: {},
    sections: []
};

export const state: IntroductionState = {
    imageAlt: '',
    imageClass: '',
    imageHeight: '',
    imagePath: '',
    imageStyles: {},
    imageWidth: '',
    title: 'Introduction',
    titleStyles: {},
    sections: [
        {
            heading: 'Introduction',
            paragraphs: [
            `Pleased to introduce myself, 
                my name is Michael McMahon, I am a software engineer with over 25 years of diverse experience within the
                software development industry.`,
            `My diverse experience ranges from desktop to web development, from senior level software developer to setting up continuous development/
                continuous integration systems, to a junior architect.`,
            `My passion has and always will be writing well tested and well architected code, using SOLID principles
                and best practices.`
            ]
        },
        {
            heading: 'HVAC Technician',
            paragraphs:[
                `Prior to starting my software development career, I worked in the HVAC (heating, ventilation, air conditioning) industry,
                    working on both residential and commercial HVAC systems.`,
                `During the summer of 1995, I had a work related accident breaking my hip and elbow. This forced me to look into a career change as 
                    it was uncertain what permanent affect on my body the injury would take.`,
                `I am very happy to say I have recovered to just about 100% of any permanent affects on my body.`,
                `I had a skilled, considerate and compassionate orthopeadic, which I am so grateful for.
                    During my recovery time, my orthopeadic would always tell me "'Michael', lets turn this lemon into lemonade", 
                    he encouraged my decision to go back to school and get a college degree.
                    At the age of 40, I went back to school to get a degree in Software Engineering.`
            ]
        },
        {
            heading: 'Back To School',
            paragraphs: [
                ` To give you context, when I went back to school, Microsoft was rocking the advertising world with the Rolling Stones jamming out their hit
                    song "Start Me Up". Microsoft and Windows 95 was putting the personal computer into the homes of average americans,
                    showing how a computer can help improve their lives.`,
                `At that time I had never turned a computer switch on, did know what DOS was, and had no idea on what opportunitites were available in which
                    was to me a very unknown and somewhat mysterious industry.`,
                ` I chose to start at our local community college to get my toes in the water to see what I should study to work in this industry. However,
                    looking back I remember thinking how this new version of Windows, Windows 95 was going to tranform this industry into somethig big.`,
                `I graduated from Pikes Peak Community College in 1997 sharing the "Outstanding Student Award", with a very nice lady and friend of mine.
                    The faculty could not choose between us, so they didn't.`,
                `After graduation from Pikes Peak, I knew that I needed to have a higher degree of education in this industry.
                    The industry was growing and more folks were entering the industry, an industry that already had many seasoned developers with an incredible
                    wealth of knowledge, I knew to succeed in the new endeavor, I would need to continue my education to a full 4 year degree.`,
                `My very next semester after graduating from PPCC, I was enrolled at the University of Colorado at Colorado Springs,
                    now more affectionately known as "CU the Springs". It was the challenge of a lifetime going back and working on an education of that level,
                    including in my last two years, working full-time and finishing up school part-time.
                    I finally graduated from the University of Colorado with a Computer Science degree from the school of engineering.`,
                `My road to recovery was complete, thanks to a list of wonderful souls who inspired me all the way starting with my orthopeadic and his
                    inspiring words, "Michael, let's turn this lemon into lemonade".`
            ]
        }
    ]
};