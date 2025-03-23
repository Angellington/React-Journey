function Pessoa(nome){
    this.nome = nome;
    this.sayName = () => {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const pessoa1 = new Pessoa('Cavalo');

pessoa1.sayName(); // Meu nome é Cavalo

function Pizza(sabor, tamanho, preco){
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.preco = preco;
    this.sayPrice = () => {
        console.log(`O preço da pizza de ${this.sabor} é R$${this.preco}`);
    }

}

const pizza1 = new Pizza('Calabresa', 'Grande', 50);

pizza1.sayPrice(); // O preço da pizza de Calabresa é R$50