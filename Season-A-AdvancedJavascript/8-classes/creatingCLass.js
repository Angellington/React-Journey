class Person {
    constructor(name, age){
        this.name = name;
        this.age  = age;
    }

    greetings(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

const p1 = new Person("John", 30);
p1.greetings();

const p2 = new Person('MInerva', 19)

p2.greetings();

// COnstructor is callback, and it is called when we create a new instance of the class with the new keyword

class Student extends Person {
    constructor(name, age, course){
        super(name, age);
        this.course = course;
    }

    study(){
        console.log(`${this.name} is  studing ${this.course}.`)
    }
}

const student1 = new Student("Mary", 20, 'Math');
student1.greetings();
student1.study();

// SUper is a reference to the parent class, and it is used to call the constructor of the parent class.

// Encapsulation: It is the concept of restricting access to certain parts of an object. In JavaScript, we can use the private keyword to create private properties and methods.

class bankAccount{
    #saldo; // private property

    constructor(dono, saldoINicial){
        this.dono = dono
        this.#saldo = saldoINicial;
    }

    depositar(valor){
        this.#saldo += valor;
        console.log(`Deposito de ${valor} feito. Novo saldo: ${this.#saldo}`)
    }

    verSaldo(){
        console.log(`Saldo de ${this.dono}: R$ ${this.#saldo}`)
    }
}

const conta1 = new bankAccount("John", 1000);

conta1.verSaldo();
conta1.depositar(500);
conta1.verSaldo();