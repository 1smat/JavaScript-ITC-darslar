let todos = []

function addTodo() {
  let todo = document.getElementById('input').value
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
  showTodos()
}

function showTodos() {
  todos = JSON.parse(localStorage.getItem('todos'))
  console.log(todos)
  let todosBox = document.querySelector('.todosBox')
  // console.log(todosBox)
  let li = document.createElement('li')
  li.textContent = todos[todos.length - 1]
  todosBox.append(li)
}
