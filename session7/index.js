// console.log(1)

// setTimeout(()=> {
//     console.log(2)
// },2000)

// console.log(3)
let context = {}
async function getData () {
    let api = await fetch("https://reqres.in/api/users?page=2&fbclid=IwAR3ufh47lUSLOjFbOqLOEgA9m0qYIV3bSOveDYil35rTWnZxW_WTF1iA9eM")
    let dataJson = await api.json()
    console.log(dataJson)
    let data = dataJson.data
    context.data = data
    


    // console.log(data)
    // console.log(api)
}

// Mr Robot

async function viewData () {
    let container = document.getElementById("container")
    await getData()
    for(let i = 0; i < context.data.length; i++){
        let html = `
        <div id = "user-${i}">
            <p> ${context.data[i].first_name} ${context.data[i].last_name}</p>
            <img src = "${context.data[i].avatar}">
            <p class="un-view"> ${context.data[i].email} </p>
        </div>
        `
        container.innerHTML += html
    }    
    for(let i = 0; i < context.data.length; i++){
        let user = document.getElementById(`user-${i}`)
        user.addEventListener('mouseover', () => {
            user.children[2].classList.toggle('view')
            console.dir(user)
        })
    }
}

// function test (e) {
//     console.log(e)
// }
viewData()


