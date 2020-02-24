// function helloGuy () {
//     console.log("Hello Hoang Viet")
// }
// helloGuy()
// helloGuyA("Ho Hung")

// function helloGuyA (name) {
//     console.log("Hello", name)
// }


// const helloGuy = () => {
//     console.log("Hello Hoang Viet")
// }
// helloGuy()

// let calc = (a,b,c,) =>{
//     console.log(a,b,c,d)
// }
// calc(1,2,3,4)

// op = ['*', "+", "-"]

// const calc = (arrayNumber) => {
//     let number = arrayNumber.split(',')
//     let sum = 0
//     for(let i = 0; i<number.length; i ++){
//     sum += Number(number[i])
// }
//     return sum
// }
// let userInput = prompt("Enter your number and seperate by commas")
// let result = calc(userInput)

// let resultDisplay = document.getElementById('sum')

// resultDisplay.innerText += result






let Operate = (a,b,op,error) => {
    let result
    if(op == '-'){
        result = a - b
    } else if (op == '+'){
        result = a + b
    } else {
        result = a * b
    }

    console.log(`${a} ${op} ${b} = ${result+error}`)

}

const checkAnswer = (error) => {
    
let check 
let userInput = prompt("Enter your Answer").toUpperCase()
if (error === 0){
    if(userInput === 'T'){
        check = true
    } else {
        check = false
    }
} else {
    if(userInput === 'T'){
        check = false
    } else {
        check = true
    }
}

if(check){
    console.log("Right")
} else {
    console.log("Wrong")
}
}



while(true){
    let a = Math.floor(Math.random()*20)
    let b = Math.floor(Math.random()*20)
    let ops = ['+','-','*']
    let op = ops[Math.floor(Math.random()*ops.length)]
    let error = Math.floor(Math.random()*4) - 2 
    Operate(a,b,op,error)
    checkAnswer(error)
}




