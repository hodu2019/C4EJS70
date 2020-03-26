let menu = document.getElementById('menu')
let userInput = document.getElementById('user_input')
let createDish = document.getElementById('create')

createDish.addEventListener('click', (e) => {
    let li = document.createElement('li')
    console.log(e)
    li.innerText = userInput.value

    menu.appendChild(li)

})
// createDish.addEventListener('mouseover', (e) => {
//     console.log(e)
// })
let del = document.getElementById('delete')
del.addEventListener('click', () => {
    if(userInput.value === ''){

        menu.removeChild(menu.lastElementChild)
    } else {
        let check = true
        for(let i = 0; i < menu.children.length; i++){

            if (userInput.value.toLowerCase() == menu.children[i].innerText.toLowerCase()){
                check = false
                menu.children[i].remove()
            } 
        }

        if(check){

            alert("Don't have that meal")
        }

    }
})

