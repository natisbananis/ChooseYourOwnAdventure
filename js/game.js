// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "https://i.pinimg.com/originals/a4/45/b8/a445b8cd3f0adc4a06580c4b2fc00ff5.jpg",
    levels: {
        // the starting game
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
        // DEAD, start all over 
         alone: {
            background_image:"https://vignette.wikia.nocookie.net/supernatural-tv-series/images/7/74/1x2_Wendigo.jpg/revision/latest?cb=20150309215621",
            message: "A few days later, you were killed by a Wendigo because you have no idea how to kill it, loser.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        //Continuing the adventure
        help: {
            background_image: "https://i.pinimg.com/originals/a4/45/b8/a445b8cd3f0adc4a06580c4b2fc00ff5.jpg",

            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You explain them your situtation and ask them for their help. They agreed to help you but in return you... ",
            choices: [
                {
                    text: "Buy them a beer",
                    nextLevel: "beer",
                },
                
                {
                    text: "Buy them some pie",
                    nextLevel:"pie",
                },
            ]
        },
        
        
        // Giving the Winchesters something in return but you decide where do you want to go. 
        beer: {
            background_image:"https://cobwebqueen.files.wordpress.com/2015/07/spn516_0780.jpg",
            message: "As the beer arrived, Sam asks you a question, 'When was the last time you've seen your daughter?' You reply with, 'The last time I've seen her is when she left for a party with a couple of friends and she didn't come home for two days and not even a single call from her.' Sam nodded and spoke, 'Hmm, we can either talk with her friends or investigate the after-party. Which one do you prefer?'",
            choices: [ 
                {
                  text:"Meet with friends.",
                  nextLevel: "friends",
                },
                
                {
                  text:"Investigate the after-party",
                  nextLevel:"afterParty",
                },
                
                
            
            ]
        },
        
        pie: {
            background_image:"https://media2.giphy.com/media/KoDomxKA7iABq/giphy.gif",
            message: "As the pie arrives, Dean immediatley digs in. Dean's cheeks were stuffed with pecan pie, Dean smiles at you. Sam asks you a question, 'When was the last time you've seen your daughter?' You reply with,'The last time I've seen her is when she left for a party with a couple of friends and she didn't come home for two days and not even a single call from her.' Sam nodded and spoke,'Hmm, we can either talk with her friends or investigate the after-party. Which one do you prefer?'",
            choices: [ 
                {
                  text:"Meet with friends.",
                  nextLevel: "friends",
                },
                
                {
                  text:"Investigate the after-party",
                  nextLevel:"afterParty",
                },
                
                
            
            ]
        },
        //Giving the Winchesters something in return but you decide where do you want to go. 
        
        // An event where you decide to meet with your daugther's friends but let's you choose with who you want to go with"
        friends: {
            background_image: "https://tribzap2it.files.wordpress.com/2015/12/supernatural-sam-dean-winchester.jpg?w=900",
            message:"Who do you take?",
            choices: [
                {
                  text:"Sam",
                  nextLevel:"friendsSam",
                },
                
                {
                  text:"Dean",
                  nextLevel:"friendsDean",
                },
            
            
            ]
        },
        
        // A path to visit her friends, but with Sam. 
         friendsSam: {
             background_image: "", 
            message:"You and Sam head to your car. 'Sorry, Dean always takes the Impala.' Sam apologizes. 'No problem, I prefer to ride in my car, anyway.' You reply. You and Sam finally arrive at the park where all the teenagers hang out. You spot your daughter's friends sitting in the nearby bench, smoking.",
            choices: [
                {
                  text:"You speak",
                  nextLevel:"",
                },
                
                {
                  text:"Sam speaks",
                  nextLevel:"",
                },
            
            
            ]
        },
        
        
        
        // A path to visit her friends, but with Dean.
         friendsDean: {
            message:"You and Dean head toward Dean's Impala, Sam taking your car to talk with your daughter's friends. You reach over to change the music when Dean smacks your hand away and says, 'Driver chooses the music, shotgun shuts his cakehole.' You pout. While driving, you hear wings flaping. You turn around and see a blue-eyed, dark-haired man in a trenchcoat.",
            choices: [
                {
                  text:"Scream",
                  nextLevel:"",
                },
                
                {
                  text:"Stare in shock",
                  nextLevel:"",
                },
            
            
            ]
        },
        
            // An event where you decide to go to the after-party but let's you choose with who you want to go with
        afterParty: {
            background_image: "https://tribzap2it.files.wordpress.com/2015/12/supernatural-sam-dean-winchester.jpg?w=900",
            message:"Who do you take?",
            choices: [
                {
                  text:"Sam",
                  nextLevel:"afterPartySam",
                },
                
                {
                  text:"Dean",
                  nextLevel:"afterPartyDean",
                },
            
            
            ]
        },
        
            // A path to go to the after-party with Sam 
        afterPartySam: {
            background_image: "https://i.pinimg.com/originals/cc/5b/69/cc5b69e22983205ce7131c9fedf5d9bf.jpg",
            message:"You and Sam head toward your car. 'Sorry, Dean always takes the Impala.' Sam apologizes. You reply with, 'No problem, I prefer riding in my own car, anyway.' Finally, you and Sam arrive at the after-party. Once you've gotten in the abandoned house where the party was held, you are immediatley attacked by a ghost.",
            choices: [
                {
                  text:"Attack",
                  nextLevel:"death3",
                },
                
                {
                  text:"Run",
                  nextLevel:"running",
                },
            
            
            ]
        },
        //A dumb death.
        death3: {
            background_image: "http://3.bp.blogspot.com/-XTpKvyG571Q/UL0iSYsIFrI/AAAAAAAAAQk/na6gxPht2cU/s1600/ghost.jpg",
            message: "You died because you didn't have any weapons, think next time, please.",
            choices:[
                {
                    text: "Go back",
                    nextLevel:"afterPartySam"
                },
                
            ]
        },
        //Continuing the story. 
        running: {
            message: "You and Sam run, you can either head back to the car, like a coward, or go to the room right next you.",
            choices: [
                {
                    text: "Run to the car",
                    nextLevel: "safe",
                },
                
                {
                    text: "Go inside the room",
                    nextLevel: "death4",
                    
                },
                
            ]
        },
        death4: {
            //Another Death, cause this is a 'fight' scene. 
            background_image: "http://3.bp.blogspot.com/-XTpKvyG571Q/UL0iSYsIFrI/AAAAAAAAAQk/na6gxPht2cU/s1600/ghost.jpg",
            message: "Sometimes, it's safe to be the coward.",
            choices: [
                {
                    text: "Go and be a coward",
                    nextLevel: "running",
                },
            
            ]
        },
        safe: {
            //Preparing to distract ghost. You don't have the intel to kill the ghost. 
            message: "Once you've gotten to the car, Sam grabbed a shotgun filled with rock salt the he brought. 'Sorry, I've only brought 1 shell.' You shrug your shoulders and grab the salt. You head into the house, Sam shoots the ghost, which only gives a few minutes to investigate. You hurriedly choose a door, the red one or blue one?",
            choices: [
                {
                    text: "Red door",
                    nextLevel: "reddeath",
                },
                
                {
                    text: "Blue door",
                    nextLevel: "blue2",
                },
                
            ]
        },
        reddeath: {
            //A wrong choice death. 
            message: "You were brought to a kitchen. Sam didn't have anymore shells. You hurried to put salt in the floor, but was too late, the ghost got to you first. Sam and you died together. ",
            choices: [
                {
                    text: "LIVE",
                    nextLevel: "safe",
                },
            
            ]
        },
        blue2: {
            //The safe passage.
            message: "You were brought to the backyard, You and Sam look around. Sam looks to you and calls you, 'Hey, look at this.' Sam calls. You turn around from the blue door and look toward Sam, he points to the ground, there, you see a distinct trail of blood leading to the woods. 'Wait here,' Sam says, 'I'll call Dean.' You ponder whether or not to get a headstart toward the path.",
            choices: [
                {
                    text: "Wait for Dean",
                    nextLevel: "safe2",
                },
                
                {
                    text: "Get a headstart",
                    nextLevel: "death5",
                },
            
            ]
        },
        death5: {
            // A sad death scene. 
            message: "You head toward the forest, Sam not noticing, You continue towards the path and trip. You fall and hit your head on a sharp rock, blood streaming out of your head. Sam runs towards you and tries to decrease the flow of blood, but soon, you die, leaving Sam to be forever guilty of not protecting you. He swears to find your daughter without you.  ",
            choices: [
                {
                    text: "Go Back",
                    nextLevel: "blue2",
                },
            
            ]
        },
        safe2: {
            background_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LImxVUbt0j-s8aVPzGfyfjHYecY5IoQHVctm2cIeBiurz76BVg", 
            message: "An Impala comes into view. Dean heads towards you. You see another man behind Dean, he has trenchcoat, blue eyes, and dark hair. You stare at the stranger for awhile and slowly turn gaze towards Dean. 'Y/N, this is Castiel, he's a literal angel. Anyway, we talked to the kids and found out that they saw your daughter leave with someone.' Dean says, 'What did you find?' Dean continues. You reply, 'Sam found a trail of blood leading to the woods.' Sam nodded and pointed the trail. You turn around at Dean and Castiel, you notice that they're standing oddly close. You question if they're a couple or not.  ",
            choices: [
                {
                    text: "'Are you two a couple?' ",
                    nextLevel: "destielsad",
                },
                
                { 
                    text: "You whisper to Sam, 'Are Dean and Castiel a couple?'",
                    nextLevel: "samShipsIt",
                },
            
            ]
        },
        //the folling 2 connects. 
        samShipsIt: {
            message: "Sam chuckles and whispers back, 'No, but those 2 are helplessly in love with eachother. They're both just too dense to notice.' You chuckle. 'What are you two whipering about?' Dean questions. 'Nothing!' Sam quickly replies. You question Castiel, 'When did you get here?' Castiel replies, 'I was bored at our home and wanted to see Dean, so I did. I also helped him question those kids.' You nod. ",
            choices: [
                {
                    text: "next,",
                    nextLevel: "forest",
                },
            
            ]
        },
        destielsad: {
            message: "Dean looks at you in shock, and then stutters, 'N-no! Me and Cas? Absolutley NOT!' You look toward at Cas and see pure sadness in his eyes. Dean looks toward Cas, Cas immediatley changes his look. An awkward silence falls between you four, so you question Cas, 'So... When did you get here Castiel?' Castiel replies, with an unnoticable sadness in his voice, 'I was bored at our home and wanted to see Dea- wanted to see if I could help.' You nod, slowly. ",
            choices: [
                {
                    text: "next,",
                    nextLevel: "forest",
                },
            
            ]
        },
            // A path to go to the after-party with Dean
        afterPartyDean: {
            background_image:"https://thenewswheel.com/wp-content/uploads/2017/06/Dean-Winchester-with-Chevrolet-Impala-1967-supernatural-31507862-1450-963.jpg",
            message:"You and Dean head toward Dean's Impala, Sam taking your car to talk with your daughter's friends. You reach over to change the music, but Dean smacks your hand away and says, 'Driver chooses the music, shotgun shuts his cakehole.' You pout. While driving, you hear wings flapping. You turn around and see a blue-eyed, dark-haired man in a trenchcoat.",
            choices: [
                {
                  text:"Scream",
                  nextLevel:"carCrash",
                },
                
                {
                  text:"Stare in shock",
                  nextLevel:"castiel",
                },
            
            
            ]
        },
                 // Another Death
        carCrash: {
            background_image: "data:image/jpeg;base64,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",
 
            message:"You frighten Dean and drew him off course, causing the car to crash and you to die.",
            choices: [
                {
                    text:"Go Back",
                    nextLevel:"afterPartyDean",
                },
                
            
            ]
        },
        // Continuing path with Dean 
        castiel: {
         background_image: "https://thewinchesterfamilybusiness.com/images/SeasonTwelve/12-10LilySunderHasSomeRegrets/12.10_0338_Cas_in_car.jpg", 
            message:"Dean notices you staring at the stranger. 'Hey, Cas. Y/N, this is Castiel, he's a literal Angel.' 'Hello, Y/N.' Castiel said in a gruffed voice. 'Hello, Castiel' You replied. Castiel turns toward Dean,'Hello, Dean.' Dean replied with, 'Watcha need, Cas?' 'Nothing, I was bored at the bunker. I wanted to see you.' ",
            choices: [
                {
                    text: "'Are you two a couple?",
                    nextLevel: "destiel",
                },
                
                {
                    text: "'You two must be great friends!'",
                    nextLevel: "nondestiel",
                },
                
                
            ]
        },
        
        destiel: {
            //AN extra, fun, scene.
            background_image: "https://i.pinimg.com/originals/9d/8b/eb/9d8bebb768b861482a13cd3e1af401e9.gif",
            message: "Dean stuttered, 'N-no!' Just as Dean said that, you guys had just arrived at the abandoned building where the party was held. ",
            choices: [
                {
                    text: "Stay with the group",
                    nextLevel: "group",
                },
                
                {
                    text: "Split up, you go by yourself",
                    nextLevel: "death2",
                }
                
                
            ]
        },
         nondestiel: {
             //A fun scene. 
             background_image: "https://thewinchesterfamilybusiness.com/images/SeasonSeven/DefendingYourLife/DYL165.jpg",
             message: "Dean murmured, 'Sure...' You were about to question Dean's disapointment, but you guys had just arrived at the abandoned building where the party was held.'",
             choices:[
                 {
                     text: "Stay with the group",
                     nextLevel:"group",
                 },
                 
                 {
                     text: "Split up, you go by yourself",
                     nextLevel: "death2",
                 }
                 
                 
            ]
        },
         
         death2: {
             // DEATH
             background_image: "http://3.bp.blogspot.com/-XTpKvyG571Q/UL0iSYsIFrI/AAAAAAAAAQk/na6gxPht2cU/s1600/ghost.jpg",
             message: "You died by a ghost because you didn't have anything to defend yourself with, stupid.",
             choices: [
                 {
                   text:"Go Back",
                   nextLevel:"castiel", 
                 },
                 
                 
                 
            ]
        },
        group: {
            //RED OR BLUE
            message: "You, Dean and Castiel head inside the house to investigate. Castiel says, 'I feel an entity here, Dean.' 'Really? Why won't ot attack?' Dean replies. 'It's afraid of me, but if one of you were to go by yourself, the ghost would attack.' All of you are confronted by 2 doors, a red door, heading to the kitchen and a blue door, leading to the backyard which on do you choose?  ",
            choices: [
                {
                    text: "Red door",
                    nextLevel: "red",
                },
                
                {
                    text: "Blue door",
                    nextLevel: "blue",
                },
                
            ]
        },
        red: {
            //A CIRCLE THAT GOES BACK TO THE BLUE DOOR.
            message: "You get inside and look around, you find nothing besides a bunch of liquor around. You see Dean smell a bottle, shrug his shoulders and down the bottle. 'That can't be healthy' You say to Dean. He shrugs and shakes a bottle towards Cas. Cas rejected the bottle. Dean smirked and drank the rest of the bottle.",
            choices: [
                {
                    text: "Go back to blue door",
                    nextlevel:"blue",
                },
            
            ]
            
        },
        blue: {
            //RIGHT CHOICE
            message:"You go inside the door and see blood on the knob. you show Dean and Cas this and they immediatley go into caution mode. You follow the distinct blood trail into the woods. 'I'll call Sam.' Dean says, he grabs his phone and dials Sam. You think whether or not to get a headstart without the group or wait for Sam.",
            choices: [
                {
                    text: "Wait for Sam",
                    nextlevel: "safe3",
                },
                
                { 
                    text: "Get a headstart",
                    nextLevel: "death6",
                },
                
            ]
        },
        death6: {
            //DEATH
            message: "You toward the woods, Dean still on the phone, not noticing. As you go deeper into the woods, you fall and trip and a branch. You hit your on a sharp rock, blood following out of your head. Your vision is blurry and you see Dean running towards you. He holds your head, helplessly yelling, 'Help, please!'. Your hand goes limp, Dean stares, a tear slipping out of his eyes. Another body falls on the weight of his shoulders.",
            choices: [
                {
                    text: "Go back",
                    nextLevel: "blue",
                },
              
              
            ]
        },
        safe3: {
            //
            message: "You see Sam get out of your car. You run towards you car to see if it was well taken care of, you see no scratches. Sam sees you, smiles and rolls his eyes. Sam looks toward Castiel and says, 'Hey, Cas! When did you get here?' Castiel replies, ' ",
            choices: [
                {
                    text: "",
                    nextLevel: "",
                },
                
                {
                    text: "",
                    nextLevel: "",
                },
            
            ]
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
   
   
   
        

    }
};
