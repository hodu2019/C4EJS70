// let dictionary = {
//     bff: 'best friend forever',
//     bf: 'boy friend'
// }

// let keys = Object.keys(dictionary)
// keys.forEach((value, index) =>{
//     console.log(`${index+1}. ${value}`)
// })
// loop = true
// while (loop){
    
//     let userInput = prompt('Enter your word, press E to Exit')
    
//     if(userInput in dictionary){
//         console.log(dictionary[userInput])
//     } else if(userInput === 'E'){
//         loop = false
//     } else {
//         let createNewWord = prompt('Do u wanna create a new word (Y/N)').toUpperCase()
//         if(createNewWord === 'Y'){
//             dictionary[userInput] = prompt('Enter the meaning')
//             keys = Object.keys(dictionary)
//             keys.forEach((value, index) =>{
//                 console.log(`${index+1}. ${value}`)
//             })
//         } else if(createNewWord === 'N'){
//             alert('Thanks you')
//         } else {
//             alert('Wrong syntax')
//         }
//     }
// }


let employees = [
    {
        name: 'Viet',
        days: 30,
        hours: 8,
        price: 50000,
    },
    {
        name: 'Hung',
        days: 20,
        hours: 12,
        price: 100000,
    },
    {
        name: 'Binh',
        days: 30,
        hours: 15,
        price: 150000,
    },
    {
        name: 'Thinh',
        days: 20,
        hours: 6,
        price: 500000,
    },

]
sum = 0
employees.forEach(value => {
    console.log(`${value.name} luong thang: ${value.days * value.hours * value.price}`)
    sum += value.days * value.hours * value.price
})

console.log(sum)