

var monsterAry = [
    "Kobold",
    "Goblin",
    "Dragon",
    "Beholder",
    "Kracken",
    "Sticky Goo",
    "Aboleth",
    "Mind Flayer",
    "Wyvern",
    "Golem",
    "Ghoul",
    "Wereboar",
    "Chimera",
];
var currentLife = 10;
var currentWord = $("#currentWord");
var lettersGuessed = $("#lettersGuessed");
var lifePoints = $("#lifePoints");


$("#start-button").on("click", function () {
    startGame();
    lettersGuessed.html("");

});

function startGame() {
    lifePoints.html(currentLife);
    var random = Math.floor(Math.random() * monsterAry.length);
    var tempMonster = monsterAry[random].toUpperCase();
    console.log(random);
    console.log(tempMonster);



    var userGuessAry = [];
    document.onkeydown = function (event) {
        var keyPress = event.key.toUpperCase();
        var letterIndex = tempMonster.indexOf(keyPress);
        if (letterIndex >= 0) {
            // need to figure out how to list out dashes for each letter. Then replace letters with correct guesses here.
            console.log("good");
        } else {
            currentLife--;
            lifePoints.html(currentLife);
            lettersGuessed.append(" " + keyPress + ",");
        }




        // console.log(keyPress);
        userGuessAry.push(keyPress);
        // console.log(userGuessAry);

    }



}






// Need to be able to start the game. 
//   set the user's hit points. 
//   change the site layout to show the game. 
// Set up array of words
// get a way to randomly pick a word  (possibly order monsters by CR rating)
// display picture of monster as a hint
// find out the length of the word (there needs to be underlinned spaces indicating characters) Might accomplish this with doing the n'th something to do every other &nbsp
// display the blank spaces for each blank character
// set up variables to capture the user's key input. 
// for loop to see if any of the characters match letters in the word
// display the letters in their correct position if guessed correctly
// display letters in the incorrect guesses area if they got it wrong
//  -- I want to have a running tally of HP, rather than have it reset every time --
// loss message if they lose. they get taken back to the home page. 
// If they beat the monster, they get to go on to another monster
// pick new word randomly from array, it cannot be one already chosen
// display image of the monster
// repeat steps above until user has either 
//   run out of HP
//   beaten all of the monsters