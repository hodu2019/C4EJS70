

// ICRUD
//Initial
let person = {
    name: 'Hoang Viet',
    age: 20,
    job: 'student',
    location: 'hanoi',
    status: 'single',
    ex: 3,
}



console.log(person)

//Read
let input = prompt()
console.log(person[input])
console.log(person['name'])
console.log(person.name)

//Update

person.status = 'in relationship with Code'

console.log(person)

// Create

person.hobby = 'Playboy'

console.log(person)

// Delete

delete person.ex
console.log(person)


