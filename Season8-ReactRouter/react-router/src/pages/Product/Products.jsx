import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

const Products = () => {
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading, error} = useFetch(url);

    
  return (
    <>
        <div>Products</div>
        {error && <p>Ocorreu um error</p>}
        {loading && <p>Carregando...</p>}
        {product && (
        <div>
            <h1>{product.name}</h1>
            <h2>R${product.price}</h2>
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
        )}
    </>
  )
}

export default Products