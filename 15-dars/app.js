// fetch('https://jsonplaceholder.typicode.com/users/')
//   .then(
//     // (response) => response.json()
//     function first(response) {
//       return response.json()
//     }
//   )
//   .then(
//     // (json) => console.log(json)
//     function second(json) {
//       console.log(json)
//       for (let index = 0; index < json.length; index++) {
//         let h1 = document.createElement('h1')
//         h1.textContent = `id: ${json[index].id} | name: ${json[index].name} | username:  ${json[index].username} | email:  ${json[index].email} | city:  ${json[index].address.city}`
//         document.body.append(h1)
//         console.log(`${h1} string`)
//       }
//     }
//   )
// // vazifa kelgan 10 ta object ni browserga yozish
// {
//   id: '1',
//   region: 'Andijon',
//   rayon: 'qwe',
//   lpu: 'qwe'

// }

// <tr> // table rowni ichidagi 1 chi table data ni innerText = array[0].id

// <td>
//   obj.id
//   </td>
// </tr>

// DRY

fetch('https://cataas.com/cat')
  .then((response) => response)
  .then(function (data) {
    let img = document.createElement('img')
    img.src = data.url
    document.body.append(img)
  })
