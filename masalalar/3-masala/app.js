// 3 - masala
// function check() {
//   let raqam = document.getElementById('number').value
//   let num = parseInt(raqam) // parseInt o'ziga string oladida uni number type da qaytarib beradi

//   // console.log(typeof num)
//   if (num > 9 && num < 100) {
//     console.log(false)
//   } else {
//     console.log(true)
//   }
// }

// 4 - masala
function check() {
  let raqam = document.getElementById('number').value
  raqam = parseInt(raqam)
  let num = parseInt(raqam) // parseInt o'ziga string oladida uni number type da qaytarib beradi

  // console.log(typeof num)
  if ((num > 99 && num <= 999) || (num < -9 && num > -100)) {
    console.log(true)
  } else {
    console.log(false)
  }
}
