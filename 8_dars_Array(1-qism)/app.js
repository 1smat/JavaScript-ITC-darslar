// const myArray = [true, 20, 'matn', false, 10]
// let x = myArray.toString() // myArray nomni massivni string ga o'tkaz
// let y = 'true, 20, `matn`, false'
// console.log(typeof x)
// console.log(myArray)

// let z = myArray.join('->')
// console.log(z)

// let a = myArray.pop()
// console.log(a)

// myArray.push('yangi matn')
// console.log(myArray)

// let newArray = [10, 20, 30]
// let allArrays = myArray.concat(newArray)
// console.log(allArrays)

// const myArray = [true, 20, 'matn', false, 10]

// myArray.splice(2, 0, 'yangi matn', 5)
// console.log(myArray)

// slice()
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Orange']
// const citrus = fruits.slice(0, 4)
// console.log(citrus)

// indexOf() - massivdagi qidirilgan elementni index raqamini qaytardi
// console.log(fruits.indexOf('Orange'))

// let ortaRaqam = fruits.length / 2 + 0.5

// console.log(fruits.lastIndexOf('Orange'))
// includes()

// console.log(fruits.includes('Lemon2'))
// sort()
// console.log(fruits.sort())

// ===============

// const numbers = [4, 2, 5, 1, 3]
// numbers.sort(compareNumbers)
// function compareNumbers(a, b) {
//   return a - b
// }

// console.log(numbers)

// forEach()
let numbers = [2, 4, 6, 8]

function foo(value, index, numbers) {
  // console.log(value)
  // console.log(index)
  // console.log(numbers)

  // console.log(value * 5)
  console.log(numbers[index])
}

numbers.forEach(foo)
