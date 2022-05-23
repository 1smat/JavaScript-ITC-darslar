// Object

// const car = {
//   type: 'Fiat',
//   color: 'white',
//   // key: value
//   // xossa: qiymat
// }

// obyekt elon qilishni 2-usuli

// const car2 = new Object()
// car2.type = 'Mazda'
// car2.color = 'red'

// console.log(car2.['color'])

// for in loop with objects

// const person = {
//   fname: 'Alex',
//   lname: 'Mike',
//   age: 26,
// }

// console.log(person.fname)
// console.log(person.lname)
// console.log(person.age)

// for (key in person) {
//   // console.log(person.key) // undefined
//   console.log(person[key])
// }

// for in loop with arrays

// const levels = ['junior', 'middle', 'senior']

// for (index in levels) {
//   console.log(levels[index])
// }
// this kalit sozimiz va object metodlar
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   },
//   returnId: () => {
//     return this
//   },
//   returnId2: function () {
//     return this
//   },
//   createObject: {
//     name: 'Object name',
//     id: 1,
//     checkThis: this,
//     checkThis2: function () {
//       return this
//     },
//   },
// }

// console.log(person.fullName())
// console.log(this)

// constructor function
function createCar(name, color, price) {
  // this.carName = name
  // this.carColor = color
  // this.carPrice = price
  console.log(this)
}

const Mazda = new createCar('Mazda RX-7', 'red', '48k$') // empty object  = bosh obyekt

// console.log(Mazda)

console.log(new createCar())
