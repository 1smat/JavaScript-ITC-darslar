// // oddiy usul
// const programmerJS = {
//   job: 'Front end',
//   salary: '3000$',
// }

// const programmerPY = {
//   job: 'Back end',
//   salary: '4000$',
// }

// factory function

function createProgrammer(job, salary) {
  const programmer = {
    job,
    salary,
  }

  return programmer
}

const programmerJS = createProgrammer('Front end', '3000$')
const programmerPY = createProgrammer('Back end', '4000$')

//  qisqa usulda yozish
let userName = 'Ismat'
let userAge = '20'

const person = {
  userName,
  userAge,
}

// console.log(person)

// constructor function

// function CreateProgrammer(job, salary) {
//   this.job = job
//   this.salary = salary
// }

// const programmerJS = new CreateProgrammer('Front end', '3500$')
// const programmerPY = new CreateProgrammer('Back end', '4500$')

// console.log(programmerJS)
// console.log(programmerPY)

ц
