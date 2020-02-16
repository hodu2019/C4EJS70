let userInput = Number(prompt("Enter your Number"))
let isPrime = true
if (userInput < 2) {
    isPrime = false
}

for(let i = 2; i < userInput; i++){
    if(userInput % i == 0){
        isPrime = false
        break
    }
}

if(isPrime){
    console.log(`${userInput} is prime`)
} else {
    console.log(`${userInput} is't Prime`)
}