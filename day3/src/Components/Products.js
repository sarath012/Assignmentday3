import React,{useState} from 'react'
import products from '../Objects/products.json'

export default function Products() {
    const [titleFilter, setTitleFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const productrows = products
        .filter((product) => ((product.title.toLowerCase()).includes(titleFilter) || titleFilter === ''))
        .filter((product) => ((product.category.toLowerCase()).includes(categoryFilter) || categoryFilter === ''))
        .map((product) =>
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.rating.rate}</td>
            </tr>
            
    );

    const submit =()=>{
        const titles=products
        .filter((product) => ((product.title.toLowerCase()).includes(titleFilter) || titleFilter === ''))
        .filter((product) => ((product.category.toLowerCase()).includes(categoryFilter) || categoryFilter === ''))
        .map((product) => console.log(product.title));
    }

  return (
    <div className='producttable'>
      <input type='text' placeholder="title"  value={titleFilter} onChange={e => setTitleFilter(e.target.value.toLowerCase())}/>
      <input type='text' placeholder="category"  value={categoryFilter} onChange={e => setCategoryFilter(e.target.value.toLowerCase())}/>
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
        <button onClick={submit}>Submit</button>
    </div>
  )
}
