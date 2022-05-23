// // object taqqoslash solishtirish
// const user1 = {
//   name: 'Username',
//   age: 10,
// }

// const user2 = {
//   name: 'Username',
//   age: 10,
// }

// // console.log(user1 == user2)

const person = {
  ismi: 'Ali',
  familiyasi: 'Valiyev',
  yoshi: '30',
}

// let x = person

// console.log(x)

// x.ismi = 'Valijon'

// console.log(x)
// console.log(person)

// xossa o'chirib
// delete person.familiyasi
// console.log(person)

// hasOwnProprety()
// console.log(person.hasOwnProperty('familiyasi'))

// keys

console.log(Object.keys(person))

// values

console.log(Object.values(person))
// stringify()
console.log(typeof person)
console.log(typeof JSON.stringify(person))

// object in object

const user = {
  name: 'Sting',
  lastName: 'String2',
  role: {
    role1: 'admin',
    role2: 'manager',
  },
}
user.role.role3 = 'pm'

user.age = console.log(user)
