
import Person from './controller/person'

const objPerson = new Person()

objPerson.main().then((name) => {
  console.log(`${name[0]} ${name[1]}`)
})

const firstName = { first: 'Cleyton' }
const allName = { ...firstName, last: 'Gama' }

console.log(allName)
