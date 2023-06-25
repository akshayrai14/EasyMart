import React, { useContext } from 'react'
import { Shoppingcontext } from '../context/shopcontext';
import { Products } from '../products/Products';
import './Cart.css'
import Cartitem from '../components/Cartitem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const nav = useNavigate();
  const {cartitems,Totalamount} = useContext(Shoppingcontext);
  const subtotal = Totalamount();
  const gotohome = ()=>{nav("/");}
  return (
    
    <div className='cart'>
      <div className='title'>
        <text>Your Cart Items  </text>
      </div>
      <div className='cartitems'>
      {Products.map((product)=>{
      if(cartitems[product.id]!==0){
        return <Cartitem data={product}></Cartitem>
      }})}
      </div>
      <div className='checkout'>
        {subtotal > 0 ? (
        <>
        <p>Subtotal: ${subtotal}</p>
        <button className='buttonia' onClick={gotohome}>Continue Shopping</button>
        <button className='buttonia'>Checkout</button></>) : (<text className='title'>Your Cart is Empty</text>)}
      </div>
    </div>
  )
}

export default Cart
