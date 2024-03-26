/* ---------------Challenge #1 -------------------- */

// Set a variable equal to your name.
var myName = "Renee";

// Request that the user inputs your name.
var userInput = prompt("Please input my name.");

/* If the name entered equals your name, display a message that reads,
'You guessed it' (or some correct message of your choice) */
if (myName === userInput) {
    alert("You guessed it!");
}

/* If the name entered does not equal your name, display a message informing them
that the guess was incorrect. */
else {
    alert("Nope!");
}

/*-----------------Challenge #2 ------------------*/

/* Create a loop that will display the content of an array. 
to the console. */
let array = [element1, element2, element3, ...];
for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}


/*----------------Challenge #3 ------------------- */

//Request that the user enter their name.
prompt
var userInput = prompt("Please input your name.");

// After the user enter's their name, update the h1 on the page
// to read "Welcome to my Site, [name]."
document.write("<h4>Welcome to my Site, " + prompt("What is your name?","") + "</h4>");