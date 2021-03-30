export default class Person {
  name () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cleyton')
      }, 3000)
    })
  }

  lastName () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Gama')
      }, 3000)
    })
  }

  async main () {
    return [await this.name(), await this.lastName()]
  }
}
