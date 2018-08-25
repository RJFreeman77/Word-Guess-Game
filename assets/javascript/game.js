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
var currentWordP = $("#currentWord");
var lettersGuessed = $("#lettersGuessed");
var lifePointsP = $("#lifePoints");

$("#start-button").on("click", function () {

    currentWordP.html("");
    lettersGuessed.html("");
    startGame();
    $("#start-button").html("Reset Game");
    $("#lose-message").css("display", "none");
    $("#win-message").css("display", "none");
});

function startGame() {
    // set up initial game state
    var isNotDuplicate = false;

    // pick random monster
    var random = Math.floor(Math.random() * monsterAry.length);
    var tempMonster = monsterAry[random].toUpperCase();
    console.log(tempMonster);

    // Dynamically set the life points based on number of unique characters
    var uniqueChar = GetUnique(tempMonster).length;
    var currentLife = Math.floor(uniqueChar * 1.5);
    lifePointsP.text(currentLife);

    // populate hidden word area
    var hiddenWordAry = [];
    for (i = 0; i < tempMonster.length; i++) {
        hiddenWordAry.push("_");
    }

    currentWordP.text(hiddenWordAry.join(" "));

    var userGuessAry = [];
    document.onkeydown = function (event) {
        var keyPress = event.key.toUpperCase();
        // make sure user is not penalized for duplicate guess
        if (userGuessAry.indexOf(keyPress) < 0) {
            isNotDuplicate = true;
        } else {
            isNotDuplicate = false;
        }
        var letterIndex = tempMonster.indexOf(keyPress);

        if (letterIndex >= 0 && isNotDuplicate) {
            userGuessAry.push(keyPress);
            for (j = 0; j < tempMonster.length; j++) {
                if (keyPress === tempMonster[j]) {
                    hiddenWordAry[j] = keyPress;
                    currentWordP.text(hiddenWordAry.join(" "));
                }
            }
            uniqueChar--;
            if (uniqueChar === 0) {
                console.log("You win");
                $("#start-button").html("Next Monster");
                $("#win-message").css("display", "block");

            }
        } else if (isNotDuplicate) {
            currentLife--;
            lifePointsP.text(currentLife);
            userGuessAry.push(keyPress);
            lettersGuessed.append(" " + keyPress + ", ");
            if (currentLife === 0) {
                $("#lose-message").css("display", "block");
                $("#start-button").html("Start Over");
            }
        } else {
            console.log("already guessed");
        }

        console.log(keyPress);

        console.log(userGuessAry);

    }



}

function GetUnique(inputAry) {
    var outputArray = [];
    for (var k = 0; k < inputAry.length; k++) {
        if ((jQuery.inArray(inputAry[k], outputArray)) == -1) {
            outputArray.push(inputAry[k]);
        }
    }
    return outputArray;

}