// 1 переменные
const firstName = 'Vitaliy'
const lastName = 'Obyedov' // string
const age = 29 // number
//console.log(firstname)
//name = 'Vi' //Uncaught TypeError: Assignment to constant variable.
const isProgrammer = true // boolean
//console.log(isProgrammer)
//age = 'some string' // послкольку это динамически типизируемый язык и в своем корне не строгой типизации поэтому не будет ошибкой так делать
//тем не менее в джаваскрипт присутствуют различные типы данных и их всего 8
//console.log(age)
const _ = 'private'
const $ = 'some value'
// const if = 'fdfswf'//Uncaught SyntaxError: Unexpected token 'if'
const withNum5 = '5'
//const 5withNum = '5'//Uncaught SyntaxError: Invalid or unexpected token

// 2 Мутирование
console.log(`Имя человека ${firstName}`)
console.log('Фамилия человека ' + lastName)
//console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age.toString())
console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age.toString())
const hight = +prompt('Введите рост в см')
alert('Твой рост ' + hight + 'см')