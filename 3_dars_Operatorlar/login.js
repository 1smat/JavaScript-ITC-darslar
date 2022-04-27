function Reg() {
  let login = document.getElementById('login').value
  console.log(login)
  let parol = document.getElementById('parol').value

  console.log(parol)

  if (login == 'admin' && parol == '1234') {
    console.log('Siz adminsiz')
    // boshqa sahifada admin panel ochiladi
  } else {
    console.log('Login yoki parol xato')
  }
}
