const fruits = ['apple', 'banana', 'orange'];

// Destructuring

const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
    name: 'Camisa',
    price: 10.99,
    category: 'roupa'
}

const {name: productName, price} = productDetails

console.log(productName)
console.log(price) 