// We want to play a "Game of 3s". Here's how you play it:

// First, you pick a random number. Then, repeatedly do the following:

// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".

// Challenge Description
// The input is a single number: the number at which the game starts. Write a program that plays the 3s game, 
// and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, 
// followed by either -1 or 1
//  (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.


let gameOfThree = (numb) =>{
    if (numb<= 0 ){
        return "You Must Enter Number Above 0"
    }
    let result =[numb]
    let n = numb
    while (n!==1){
        if (n%3 ==0){
            n/=3
            result.push(0)
        } else {
            n -= 1;
            result.push(-1)
        }
    }
    result.push(1)
    return result
}

console.log(gameOfThree(100))