import React, { useContext, useRef } from 'react'
import './Product.css'
import { Shoppingcontext } from '../context/shopcontext';
import './Product.css'
import { Minus, Plus } from 'phosphor-react';



function Cartitem(props) {
  const inputRef=useRef(null);
  const {remfrocart ,addTocart,cartitems,updatecartitemcount} = useContext(Shoppingcontext);
  const {id, productName, price,productImage} = props.data;
  const cartitemcount = cartitems[id];
   const handleinputchange=(event)=>{
    updatecartitemcount(Number(event.target.value),id)
   }
   var sum=0;
   for(let i=0;i<cartitems.length;i++){
    sum+=cartitems[id];
   }
  //we accessed the caritems array and for specific index we checked the value of array
  
  return (
    <div className='container'>
      <div className='movie-name'>{productName}</div>
      <img className='movie-image' src={productImage}></img>
      <div className='movie-year'>
        $ {price * cartitems[id]} 
      </div>
      <div className='cart-details'>
      <Minus onClick={()=>remfrocart(id)}></Minus>
      <input className='inputty' ref={inputRef} value={cartitemcount} onChange={handleinputchange}></input>
      <Plus onClick={()=>addTocart(id)}></Plus>
      </div>
    </div>
  )
}

export default Cartitem
