import React,{useState} from 'react'
import products from '../Objects/products.json'

export default function Products() {

    const productrows = products.map((product) =>
        <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
        </tr>
      
  );

  return (
    <div className='producttable'>
      <input type='text' placeholder="title"/>
      <input type='text' placeholder="category"/>
      <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>   
            </thead>
            <tbody>
                {productrows}
            </tbody>
            
        </table>

    </div>
  )
}
