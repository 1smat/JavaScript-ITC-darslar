// function Toggle() {
//   const burger = document.getElementById('burger')
//   const burgerX = document.getElementById('burger_x')

//   burger.style.display = 'none'
//   burgerX.style.display = 'block'

//   document.querySelector('.nav__links').style.display = 'block'
//   document.querySelector('.nav__links').style.opacity = '0'
//   setTimeout(() => {
//     document.querySelector('.nav__links').style.opacity = '1'
//   }, 300)
// }

// function ToggleX() {
//   const burger = document.getElementById('burger')
//   const burgerX = document.getElementById('burger_x')

//   burgerX.style.display = 'none'
//   burger.style.display = 'block'

//   document.querySelector('.nav__links').style.opacity = '1'

//   document.querySelector('.nav__links').style.opacity = '0'
//   setTimeout(() => {
//     document.querySelector('.nav__links').style.display = 'none'
//   }, 3000)

//   // document.querySelector('.nav__links').style.position = 'absolute'
//   // document.querySelector('.nav__links').style.top = '-400px'
// }

function Toggle() {
  const burger = document.querySelector('.burger__menu')
  const one = document.getElementById('one')
  const two = document.getElementById('two')
  const three = document.getElementById('three')

  one.style.display = 'none'

  two.style.transform = 'rotate(45deg)'

  three.style.position = 'relative'
  three.style.top = '-17.8px'
  three.style.left = '-2px'
  three.style.transform = 'rotate(-45deg)'
  console.log(one)
  console.log(two)
}
