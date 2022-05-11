// // function foo() {
// //   console.log('foo')
// //   function bar() {
// //     console.log('bar')
// //   }
// //   bar()
// // }

// // foo()
// // ======================================================

// function ask(savol, yes, no) {
//   if (confirm(savol)) {
//     yes()
//   } else {
//     no()
//   }
// }

// ask(
//   'Siz rozimisiz?',
//   function () {
//     alert('Siz rozisiz')
//   },
//   function () {
//     alert('Siz rozimassiz')
//   }
// )

// funksiyani o'zaruvchiga tenglash
// function funksiyaA() {
//   console.log('Salom')
// }
// const meningOzgaruvchim = funksiyaA
// meningOzgaruvchim() // Salom console ga chiqadi

// const foo = function () {
//   console.log('123')
// }
// foo()

// const bar = () => {
//   console.log('bar')
// }

// bar()

// expression vs declaration va hoisting

// function Foo() {
//   console.log('foo')
// }
// Foo()

// const bar = () => {
//   console.log('bar')
// }
// bar()

// object e'lon qilganda yoki arraylarni const
// =============================================================
// Ternarat operatori - bu if va else ni qisqa varianti

// if (5 > 2) {
//   console.log('true')
//   // shart
//   //shart true bo'lsa if bloki bajariladi
// } else {
//   // shart false bo'lsa
//   console.log('false')
// }

// 5 > 2 ? foo() : console.log('false')

// function foo() {
//   console.log('true')
//   console.log('true2')
// }

// masala

function hisobla(yil, oy, kun) {
  let x = yil - 1970 // 48 yil * 360
  let y = oy - 1 // 10 oy * 30
  let z = kun - 1 // 28 kun

  let natija = x * 360 + y * 30 + z
  console.log(natija + ' kun')
}

hisobla(2018, 11, 29)
