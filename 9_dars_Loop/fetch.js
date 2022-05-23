let data = null

fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((json) => {
    data = json
    console.log(data)
    // document.getElementById('name').textContent = data[0].name
    // document.getElementById('username').textContent = data[0].username
    // document.getElementById('phone').textContent = data[0].phone
    document.getElementById('image').src = 'image.webp'
  })

const user = {
  name: 'qwe',
}
