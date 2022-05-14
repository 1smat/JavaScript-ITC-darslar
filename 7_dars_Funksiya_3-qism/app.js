// function foo(x, y = 7) {
//   // console.log(x + y)
//   // console.log(x)
//   // console.log(y)
//   // if (y === 7) {
//   //   console.log('y berilmadi')
//   // }
//   console.log(arguments[2]) // type array
//   console.log(x + y + arguments[2])
// }

// foo(5, 10, 7)

// ======================================
// let x = document.querySelector('.h1')
// console.log(x)

// let y = document.querySelector('#h3')
// console.log(y)

// let x = document.querySelectorAll('.h1')
// console.log(x[2])

// classList  add remove toggle

function Change() {
  document.querySelector('.h1').classList.add('primary')
  document.getElementById('h3').classList.add('primary')
}

function Remove() {
  document.querySelector('.h1').classList.remove('primary')
  document.querySelector('#h3').classList.remove('primary')
}

function Toggle() {
  document.querySelector('.h1').classList.toggle('primary')
  document.querySelector('#h3').classList.toggle('primary')
  console.log(document.querySelector('#h3').classList.contains('primary'))
}
