// Javascript blindar o this
let a = 10
let b = 20

const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b
console.log(sum(a, b))

const arrotoSum = (a, b) => {
    return a + b
}
console.log(arrotoSum(a, b));

const greeting = (name) => {
    if(name){
        return `Greeting ${name}`
    } else {
        return 'Hi'
    }
}

console.log(greeting('Minerva'))
console.log(greeting())

const testeArrow = () => console.log("Testou");

testeArrow()

const user = {
    name: 'Minerva',
    sayUserName(){
        var self = this
        setTimeout((self) => {
            console.log('Username: ' + self.name)
        }, 1000)
    },
    sayUserNameArrow(){
        
    }
}