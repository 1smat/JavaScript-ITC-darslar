function Convert() {
  let summa = parseInt(document.getElementById('summa').value)

  console.log(typeof summa)
  let kiruvchiValyuta = document.getElementById('valyuta-kiruvchi').value
  let chiquvchiValyuta = document.getElementById('valyuta-chiquvchi').value

  if (kiruvchiValyuta == 'sum' && chiquvchiValyuta == 'dollar') {
    let natija = summa / 11275
    document.getElementById('natija').textContent = 'Natija : ' + natija
  } else if (kiruvchiValyuta == 'dollar' && chiquvchiValyuta == 'sum') {
    let natija = summa * 11275
    document.getElementById('natija').textContent = 'Natija : ' + natija
  } else {
    console.log('error')
  }
}

// const person = {
//   name: 'string',
// }

// person.name

// = 1 ta barobar bu qiymat berish operatori

// == 2 ta barobar bu qiymat tekshiruvchi
