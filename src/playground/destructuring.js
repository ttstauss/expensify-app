//
// object destructuring
//

// const person = {
//   // name: 'Taylor',
//   age: 32,
//   location: {
//     city: 'Provo',
//     temp: 92
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)



//
// array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [ , city, state = 'New York' ] = address
console.log(`You are in ${city}, ${state}.`)

const item = ['coffee (hot)', '$3.00', '$3.50', '$3.75']
const [itemName, , medium] = item
console.log(`A medium ${itemName} costs ${medium}`)