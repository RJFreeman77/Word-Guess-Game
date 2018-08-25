# Word-Guess-Game

## Summary
I created a Dungeons and Dragons inspired word guess game using HTML, CSS, Bootstrap 4, JavaScript, and jQuery. 

The assignment was to create a game that would pick a random word from an array, and track the user's responses as they tried to guess the word. If the user runs out of attempts, or guesses the word, they should get an appropriate message. 

After I completed the basic requirements, I added a couple more things. 
* The user's lfe points are dynamically set based on the number of unique letters in the target word.
* An image and hint are put onto the DOM to help the user guess the word.
* I set up a check to make sure the user was not penalized for guessing the same letter more than once. 

In the future, I would like to put the target words and associated information into objects. This would make it easier to make sure users see all of the target words once before the repeat.