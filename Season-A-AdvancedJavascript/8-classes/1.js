class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)    
    }
}


const shirt = new Product("Camisa gola y", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

const tenis = new Product("Tenis", 100) 

console.log(tenis.productWithDiscount(55))



class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 50, ["preto", "branco", "vermelho"])    

console.log(hat.name)

console.log(hat.productWithDiscount(10))

console.log(hat.showColors())