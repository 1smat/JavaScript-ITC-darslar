const laptop = {
  name: 'Acer',
  cost: '700$',
  year: 2020,
  cpu: 'AMD Radeon 7',
  gpu: 'Nvidia gtx-710',
}

laptop.name = 'Asus'
laptop.cost = '900$'

// laptop = 10 // error

// let laptopName = 'Acer'
// let laptopCost = '700$'
// let laptopYear = 2020
// let laptopCpu = 'AMD Radeon 7'

// console.log(laptop)

// Array

// let num = 10
// const maktabSinflar = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
// ]

// console.log(maktabSinflar[8])

// const myArray = [
//   true,
//   20,
//   'string',
//   {
//     name: 'str',
//     age: 10,
//   },
//   [1, 3, 5, 7, ['massiv ichidagi massiv']],
// ]

// console.log(myArray[4][4])


// function 

const programmer = {
  salary: 500,
  language: 'JavaScript',
  isJunior: true,
  valyuta: undefined,
  pocket: null,
  phone: {
    name: 'samsung',
    year: '2020'
  },
  tools: ['vscod', 'terminal', 'figma'],
  sayHello: () => { 
    console.log('Hello world')
  }
}


programmer.sayHello()