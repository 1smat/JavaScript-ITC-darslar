function addLike() {
  let counter = document.getElementById('counter').textContent
  console.log(counter)
  document.getElementById('counter').textContent = ++counter
}

function disLike() {
  let counter = document.getElementById('counter').textContent
  console.log(counter)
  document.getElementById('counter').textContent = --counter
}
