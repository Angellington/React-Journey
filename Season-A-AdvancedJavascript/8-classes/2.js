class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes(){
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}

const carro1 = new Carro('Ford', 'Fiesta', 2019);
carro1.detalhes();


class Esportivo extends Carro {
    constructor(marca, modelo, ano, velocidadeMax){
        super(marca, modelo, ano);
        this.velocidadeMax = velocidadeMax;
    }

    mostrarVelocidade(){
        console.log(`Velocidade máxima: ${this.velocidadeMax}km/h`)
    }
}

const esportivo1 = new Esportivo('Honda', 'Civic', 2020, 220);

esportivo1.mostrarVelocidade();