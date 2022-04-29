function hisobla() {
  let uchOchkoli = document.getElementById('uch').value
  uchOchkoli = parseInt(uchOchkoli)
  let ikkiOchkoli = document.getElementById('ikki').value
  ikkiOchkoli = parseInt(ikkiOchkoli)

  let umumiyHisob = uchOchkoli * 3 + ikkiOchkoli * 2

  document.getElementById('natija').textContent = 'Natija :' + umumiyHisob
}
