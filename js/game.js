// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "https://i.pinimg.com/originals/a4/45/b8/a445b8cd3f0adc4a06580c4b2fc00ff5.jpg",
    levels: {

        start: {
            message: "You are hunting a demon who kiddnaped your daugther. You have no experience in hunting. Luckily you came across two good-looking well trained hunters named, Sam & Dean Winchester at a bar. ",
            choices: [
                {
                    text: "Ask them for help?",
                    nextLevel: "help",
                },

                {
                    text: "No, you have to do this alone",
                    nextLevel: "alone",
                },
            ]
        },

        help: {
            background_image: "https://i.pinimg.com/originals/a4/45/b8/a445b8cd3f0adc4a06580c4b2fc00ff5.jpg",

            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You explain them your situtation and ask them for their help. They agreed to help you but in return you... ",
            choices: [
                {
                    text: "Buy them a beer",
                    nextLevel: "start",
                },
                
                {
                    text: "Buy them some pie",
                    nextLevel:"start",
                },
            ]
        },

        alone: {
            message: "A few days later, you were killed by a Wendigo because you have no idea how to kill it, loser.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
