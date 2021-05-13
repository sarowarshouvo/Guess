let max=parseInt(prompt("Enter the maximum number: "));
while(!max){
    max=parseInt(prompt("Enter a valid number: "));
}
const targetNumb=Math.floor(Math.random()*max)+1;

let guess=parseInt(prompt("Make ur first Guess!"));
let attempt=1;

while(parseInt(guess)!==targetNumb){
    attempt++;
    if(guess==='q') break;
    if(guess>targetNumb){
        guess=prompt("Too High! Make a new Guess:");
    } else{
        guess=prompt("Too Low! Make a new Guess:");
    }
}

if(guess='q'){
    console.log("Okay! U Quit");
} else
    console.log("Comgrats u win!");
    console.log(`U GOT IT! It took u ${attempt} guesses`);