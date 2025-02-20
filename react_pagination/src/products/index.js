import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import Pagination from '../pagination'
const PAGE_SIZE =10;

function Products() {
    const [products,setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState([0])
    const getProducts = async () =>{
        let response = await fetch('https://dummyjson.com/products?limit=190')
        let products =  await response.json();        
        setProducts(products.products)
    }

    useEffect(()=>{
        getProducts();
    },[])

    const totalPages = Math.ceil(products.length / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end  = start+PAGE_SIZE;

    const handleNext =()=>{
        setCurrentPage(currentPage+1)
    }
    const handlePrev = () =>{setCurrentPage(currentPage-1)}
    const handlePagination = (pageNo) =>{
        setCurrentPage(pageNo);
    }
  return (
    <div>
        <h1>Products</h1>
        <div className='product-container'>
            { products.length>0 && products?.slice(start,end)?.map((product,index)=>(
                    <ProductsCard key={product.title+''+index}  product={product}/>
            ))
            }
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} handleNext={handleNext} handlePrev={handlePrev} handlePagination={handlePagination} />
    </div>

  )
}

export default Products