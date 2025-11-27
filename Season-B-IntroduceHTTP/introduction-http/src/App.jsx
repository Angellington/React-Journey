import { useEffect, useState } from 'react';
import './App.css'


function App() {
  
  const [products, setProducts] = useState([])
  
  const url = "http://localhost:3000/products";
  
  // Aula 1 - Resgatando dados;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
      } catch(e) {
        console.error("Deu pau", e)
      }
    }
    fetchData();
  }, [])
  
  
  console.log('products', products)

  return (
    <div className="app">
      <h1>Lista de Produtos</h1>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - R$ {product.price}
        </li>
      ))}
    </div>
  )
}

export default App
