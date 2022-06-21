// let interval
// function foo() {
//   interval = setInterval(() => {
//     console.log('2 sekunddan keyin')
//   }, 2000)
// }

// function stop() {
//   clearInterval(interval)
// }

// setTimeout(stop, 9000)
// foo()

// ========================
// let buttonStop = document.querySelector('#stop')
// let buttonStart = document.querySelector('#start')
// buttonStop.addEventListener('click', stopCount)
// buttonStart.addEventListener('click', count)

// let interval
// function count() {
//   let counter = document.getElementById('counter')
//   let sanoq = parseInt(counter.textContent)
//   console.log(typeof sanoq)
//   interval = setInterval(() => {
//     sanoq++
//     counter.innerText = sanoq
//   }, 1000)
//   // console.log(typeof counter.textContent)
// }

// function stopCount() {
//   clearInterval(interval)
// }

// count()

document.getElementById('submit').addEventListener('click', submit)

function submit(e) {
  e.preventDefault()
  let name = document.getElementById('name').value
  let lastname = document.getElementById('lastname').value

  let user = {
    name,
    lastname,
  }
  localStorage.setItem('data', JSON.stringify(user))
}

function show() {
  let user = JSON.parse(localStorage.getItem('data'))
  let h1 = document.createElement('h1')
  h1.textContent = user.name
  let h2 = document.createElement('h2')
  h2.textContent = user.lastname

  document.body.append(h1, h2)
}
