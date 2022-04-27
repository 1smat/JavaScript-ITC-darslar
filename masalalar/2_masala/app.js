function Hisobla() {
  let chegirma = document.getElementById('qari')
  let box = document.querySelectorAll('.tovar:checked')
  let narx = box.length * 10
  if (chegirma.hasAttribute('checked')) {
    let chegirmaliNarx = narx - narx * 0.1
    console.log('Chegirma bilan' + chegirmaliNarx)
  } else {
    console.log(narx)
  }

  console.log('Umumiy narx ' + narx + ' sum')
}
function changeValue() {
  if (document.getElementById('qari').hasAttribute('checked')) {
    document.getElementById('qari').removeAttribute('checked')
  } else {
    document.getElementById('qari').setAttribute('checked', '')
  }
}
