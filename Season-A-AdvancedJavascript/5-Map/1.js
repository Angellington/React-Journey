// map

const products = [
    {  name: 'Camisa', price: 10.99, category: 'roupa'}
,   {  name: 'Bermuda', price: 15.99, category: 'roupa'}
,   {  name: 'Tênis', price: 100.99, category: 'calçado'}
,   {  name: 'Boné', price: 5.99, category: 'acessório'}
]

products.map((product) => {
    if(product.category === 'roupa') {
        product.onSale = true;
    }
})

console.log(products)

