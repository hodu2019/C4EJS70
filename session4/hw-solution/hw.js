// let product = [
//     {
//         Name: 'Xiaomi portable charger 20000mah',
//         Brand: 'Xiaomi',
//         Price: 428 ,
//         Color: 'White ',
//         Category: 'Charger',
//     },
//     {
//         Name: 'VSmart Active 1',
//         Brand: 'VSmart',
//         Price: 5487,
//         Color: 'Black',
//         Category: 'Phone',
//     },
//     {
//         Name: 'IPhone X',
//         Brand: 'Apple ',
//         Price: 21490,
//         Color: 'Gray',
//         Category: 'Phone',
//     },
//     {
//         Name: 'Samsung Galaxy A9',
//         Brand: 'Samsung',
//         Price: 8490,
//         Color: 'Blue',
//         Category: 'Phone',
//     }
// ]


// product.forEach((value, index) => {
//     console.log(`#${index+1} Name: ${value.Name}`)
//     console.log(`Price: ${value.Price}`)
//     console.log("----------------------")
// })
// // let indexUser = prompt('Enter the index')

// // product.forEach((value, index) => {
// //     if(indexUser == index + 1) {
// //         console.log(`${value.Name}`)
// //     }
// // })
// let userCategory = prompt("Enter category")
// product.forEach((value, index) => {
//     if(userCategory == value.Category) {
//         console.log(`${value.Name}`)
//     }
// })


var dev_front =[
    {
        language:'HTML',
        complete:false,
    },
    {
        language:'CSS',
        complete:false,
    },
    {
        language:'Basics of javaScript',
        complete:false,
    },
    {
        language:'Node package manager (npm)',
        complete:false,
    },
    {
        language:'Git',
        complete:false,
    },
]   

dev_front.forEach((value,index)=>{
    console.log(`${index+=1}. ${value.language}\nComplete: ${value.complete}`)
})

let userInput = prompt("N,D,U,C").toUpperCase()

if(userInput == 'U'){
    let userPosition = prompt("Enter position")
    if(userPosition <= dev_front.length && userPosition >= 1){
        dev_front[userPosition-1].language = prompt("Enter new title")
    }
}

dev_front.forEach((value,index)=>{
    console.log(`${index+=1}. ${value.language}\nComplete: ${value.complete}`)
})