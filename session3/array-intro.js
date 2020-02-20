// let item1 = 'sườn xào chua ngọt'
// let item2 = 'Canh ngao'
// let item3 = 'hamburger'
// let item4 = 'Thịt chó'
// let item5 = 'Thịt gà'

// console.log(item1,item2,item3,item4,item5)

//ICRUD
//Initial

let menu = ['Canh ngao','Thịt gà']
console.log(menu)

//Create
menu.push('hamburger')
console.log(menu)

//Read
// Để đọc 1 phần tử trong mảng thì sẽ phải đọc bằng chỉ số index

// console.log(menu[2])

// Đọc nhiều tất cả phần tử trong array
// console.log(menu.length)
// for(let i = 0; i < 3; i++){
//     console.log(menu[i])
// }

for(let i = 0; i < menu.length; i++){
    console.log(`${i+1}. ${menu[i]}`)
}

// menu.forEach((value,index)=>{
//     console.log(`${index} ${value}`)
// })


//Update

// menu[2] = 'Thịt cho'

// console.log(menu)

// let i = menu.indexOf('Canh ngao')

// console.log(i)

// menu[i] = 'Súp'
// console.log(menu)


//Delete

menu.splice(1,1)
console.log(menu)