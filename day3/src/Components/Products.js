import React,{useEffect, useState} from 'react'
import products from '../Objects/products.json'

export default function Products() {
    const [sampleProducts, setSampleProducts] = useState(products)
    const [titleFilter, setTitleFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [titleAsc, setTitleAsc] = useState(true);
    const [categoryAsc, setCategoryAsc] = useState(true);

    useEffect(()=>{
        handleTitleSortAsc()
    },[])

    function handleTitleSortAsc(){
        const titleSortedAsc = [...sampleProducts].sort((a,b)=>a.title > b.title ? 1 : -1)
        setSampleProducts(titleSortedAsc)
        setTitleAsc(!titleAsc)
    }

    function handleTitleSortDesc(){
        const titleSortedDesc = [...sampleProducts].sort((a,b)=>a.title > b.title ? -1 : 1)
        setSampleProducts(titleSortedDesc)
        setTitleAsc(!titleAsc)
    }
    function handleCategorySortAsc(){
        const categorySortedAsc = [...sampleProducts].sort((a,b)=>a.category > b.category ? 1 : -1)
        setSampleProducts(categorySortedAsc)
        setCategoryAsc(!categoryAsc)
    }

    function handleCategorySortDesc(){
        const categorySortedDesc = [...sampleProducts].sort((a,b)=>a.category > b.category ? -1 : 1)
        setSampleProducts(categorySortedDesc)
        setCategoryAsc(!categoryAsc)
    }

    const productrows = [...sampleProducts]
        // .filter((product) => ((product.title.toLowerCase()).includes(titleFilter) || titleFilter === ''))
        // .filter((product) => ((product.category.toLowerCase()).includes(categoryFilter) || categoryFilter === ''))
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
                    <th>Title
                    {titleAsc ? (
                            <button onClick={handleTitleSortAsc}>sort Title ↑</button>
                        ):(
                            <button onClick={handleTitleSortDesc}>sort Title ↓</button>
                        )}
                    </th>
                    <th>Category
                    {categoryAsc ? (
                            <button onClick={handleCategorySortAsc}>sort Category ↑</button>
                        ):(
                            <button onClick={handleCategorySortDesc}>sort Category ↓</button>
                        )}
                    </th>
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
