import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {id:1,name:"Laptop",price:50000},
        {id:1,name:"Mobile",price:30000},
        {id:1,name:"TV",price:20000},
        {id:1,name:"CPU",price:10000}
    ]
    return (
    <div>
        <h1>
            Products
        </h1>
        {products.map((product)=>(
            <div key={product.id}>
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
        ))}
    </div>
  )
}

export default Products