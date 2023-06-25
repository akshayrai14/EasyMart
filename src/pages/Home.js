import React, { useEffect } from 'react'
import { Products } from '../products/Products'
import Product from '../components/Product'
import './Home.css'
function Home({showing}) {
  return (
    <div className='particle-js'>
      <div className='title'>
        My Shoppy
      </div>
      <div className='products'>
        {Products.map((product)=>(<Product data={product}></Product>))}
      </div>
    </div>
  )
}

export default Home
