export type LeadershipTopic = {
    business: string;
    topics: Array<string>;
}
export type LeadershipState = {
    title: string;
    titleStyles: string;
    leadershipTopics: Array<LeadershipTopic>;
};

export const leadershipState: LeadershipState = {
    title: "Leadership",
    titleStyles: "font-size:1.75vw",
    leadershipTopics: [
        {
            business: "Weyerhaeuser - iLevel",
            topics: [
                "Founded and lead a design patterns study group",
                "Lead the Weyerhaeuser's 'Health and Fitness' program"
            ]
        },
        {
            business: "Sogetti - Colorado",
            topics: [
                "Organized a bicycle team to represent Sogetti-Colorado in the Colorado MS-150 bike ride",
                "Lead the 'Social and Community Responsibility' program for Sogetti-Colorado"
            ]
        }            
    ]
};