const tovarlar = document.getElementsByClassName('tovar')
const korzina = []
function addElement(event) {
  console.log(event.target.textContent)
  korzina.push(event.target.textContent)
  console.log(korzina)
}

function hisobla() {
  let summa = 0
  if (korzina.includes('PowerBank (Xiomi)')) {
    summa = korzina.length * 100 - 50
  } else {
    summa = korzina.length * 100
  }

  console.log(summa)
}
