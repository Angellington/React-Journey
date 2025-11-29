  import { useEffect, useState } from 'react';
  import './App.css'
  import { useFetch } from './hooks/useFetch';


  function App() {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // 4 - useHook
    
    
    
    const url = "http://localhost:3000/products";
    const { data: items, httpConfig, loading, error } = useFetch(url);
    
    // Aula 1 - Resgatando dados;
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await fetch(url)
    //       const data = await res.json()
    //       setProducts(data)
    //     } catch(e) {
    //       console.error("Deu pau", e)
    //     }
    //   }
    //   fetchData();
    // }, [])

    // Aula 2 - Adição de produtos;
    const handleDelete = (id) => {
      try{
        httpConfig(null, "DELETE", id)
        alert("Deletado com sucesso!")
      } catch(e){
        console.error("e", e)
        alert("Deu erro")
      }

    }
    const handleSubmit = async (e) => {
      await e.preventDefault();
      
      const product = {
        name,
        price,
      }

      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(product)
      // });

      
      // // Aula 3 - Carregamento Dinâmico;
      // const addedProduct = await res.json();

      // setProducts((prevProducts) => [...prevProducts, addedProduct])

      //Refatorando POST


      httpConfig(product, "POST")

      setName("");
      setPrice("");
    }
    
    

    return (
      <div className="app">
        <h1>Lista de Produtos</h1>
        {/** Loading */}
        {loading && <p>Carregando dados</p>}
        {error && <p>{error}</p>}
        {!loading && (
        <ul>
          {items?.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button className='product-button' onClick={() => handleDelete(product.id)}>Remover</button>
            </li>
          ))}
        </ul>
        )}


        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço:
              <input type="text" value={price} name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
            </label>

            {/* State de loading no post */}
          {loading && (<input type="submit" disabled value="Aguarde" />)}
          {!loading && (<input type="submit" value="Criar" />)}
            
          </form>
        </div>


      </div>
    )
  }

  export default App
