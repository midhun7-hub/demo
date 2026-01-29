import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const products = [
        {id:1,name:"Laptop",price:50000,description:'Dell'},
        {id:1,name:"Mobile",price:30000,description:'Iphone'},
        {id:1,name:"TV",price:20000,description:'Samsung'},
        {id:1,name:"CPU",price:10000,description:'Lenovo'}
    ]
    const {id} = useParams();
    const product = products.find((p)=>p.id===Number(id));
  return (
    <div>
        ProductDetails
        <h2>Name:{product.name}</h2>
        <h3>Price:{product.price}</h3>
        <h4>Description:{product.description}</h4>
    </div>
  )
}

export default ProductDetails