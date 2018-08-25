var monsterAry = [
    "Kobold",
    "Goblin",
    "Dragon",
    "Beholder",
    "Kraken",
    "Aboleth",
    "Mind Flayer",
    "Wyvern",
    "Golem",
    "Bugbear",
    "Wereboar",
    "Chimera",
];
var monsterPics = [
    "assets/images/kobold-image.jpg",
    "assets/images/goblin-image.jpg",
    "assets/images/dragon-image.jpeg",
    "assets/images/beholder-image.jpg",
    "assets/images/kracken-image.jpg",
    "assets/images/aboleth-image.jpg",
    "assets/images/mind-flayer-image.jpg",
    "assets/images/wyvern-image.png",
    "assets/images/golems-image.jpg",
    "assets/images/bugbear-image.jpg",
    "assets/images/wereboar-image.png",
    "assets/images/chimera-image.jpg",

];
var monsterHints = [
    "Noted for their skill at building traps and preparing ambushes, and mining. They are distinctly related to dragons, and are often found serving as their minions.",
    "Race of small goblinoids, often living in underground caverns near the surface known as lairs.",
    "Very powerful and magical creatures. There are several types, defined by their colors, most common of which are chromatic and metallic.",
    "Sometimes called spheres of many eyes, or an eye tyrants. These large, orb-shaped beings had ten eyestalks and one central eye, each containing powerful magic.",
    "Large, ocean-dwelling magical beasts. They are akin to squids except much larger in size.",
    "Large, fist-like amphibians with powerful psionic powers.",
    "Humanoid in appearance, but have an octopus-like head and tentacles.",
    "Large winged lizard with a stinging tail and sharp teeth. They had dark brown or grey bodies.",
    "Typically created from stone, these animated objects move like living creatures.",
    "Massive humanoid distantly related to, but larger and stronger than, goblins and hobgoblins.",
    "Once humans, these lycanthropes were turned after being bitten by another of their kind.",
    "Large magical beast that was a combination of several different creatures, namely a dragon, a goat, and a lion."
];
var currentWordP = $("#currentWord");
var lettersGuessed = $("#lettersGuessed");
var lifePointsP = $("#lifePoints");

$("#start-button").on("click", function () {

    currentWordP.html("&nbsp;");
    lettersGuessed.html("&nbsp;");
    startGame();
    $("#start-button").html("Reset Game");
});

function startGame() {
    // set up initial game state
    $("#lose-message").css("display", "none");
    $("#win-message").css("display", "none");
    var isNotDuplicate = false;

    // pick random monster
    var random = Math.floor(Math.random() * monsterAry.length);
    var tempMonster = monsterAry[random].toUpperCase();
    console.log(tempMonster);

    // Set image and hint
    $("#monster-image").attr("src", monsterPics[random])
    $("#hint").text(monsterHints[random])
    // Dynamically set the life points based on number of unique characters
    var uniqueChar = GetUnique(tempMonster).length;
    var currentLife = Math.floor(uniqueChar * 1.5 + 1);
    lifePointsP.text(currentLife);

    // populate hidden word area
    var hiddenWordAry = [];
    for (i = 0; i < tempMonster.length; i++) {
        hiddenWordAry.push("_");
    }
    currentWordP.text(hiddenWordAry.join(" "));

    // handeling user input
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
                $("#monster-span").text(tempMonster);
                $("#start-button").html("Start Over");
            }
        } else {
            console.log("already guessed");
        }
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