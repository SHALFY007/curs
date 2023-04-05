const defaultState = {
    news: [
        {
            id:1,
            title: 'Tomato',
            description: "Agriculture is the most healthful, most useful and most noble employment of man",
            source: "George Washington",
            img: "./img/tomato.gif",
            date: "Thurday 09 2022"
        },

        {
            id:2,
            title: 'Beas',
            description: "Agriculture is the most healthful, most useful and most noble employment of man",
            source: "George News",
            img: "./img/beas.gif",
            date: "Thurday 09 2022"
        },

        {
            id:3,
            title: 'Hay When You Need It',
            description: "Agriculture is the most healthful, most useful and most noble employment of man",
            source: "News Washington",
            img: "./img/green.gif",
            date: "Thurday 09 2022"
        },

        {
            id:4,
            title: 'Strawberry Ginger',
            description: "Agriculture is the most healthful, most useful and most noble employment of man",
            source: "News Washington",
            img: "./img/strawberry.gif",
            date: "Thurday 09 2022"
        }
    ]
}


export const newsReducer = (state=defaultState, action) => {
    
    switch (action.type) {
        case "ADD_NEWS":
            
            break;
    
        default:
            return state
    }
}