import React, { useContext } from 'react'
import './Product.css'
import { Shoppingcontext } from '../context/shopcontext';

function Product(props) {
  const {addTocart,cartitems} = useContext(Shoppingcontext);
  const {id, productName, price,productImage} = props.data;
  const cartitemcount = cartitems[id];
  //we accessed the caritems array and for specific index we checked the value of array
  return (
    <div className='container'>
      <div className='movie-name'>{productName}</div>
      <img className='movie-image' src={productImage}></img>
      <div className='movie-year'>
        $ {price}
      </div>
      <button className='button-but'  onClick={()=>addTocart(id)}>Add to cart {cartitemcount > 0 && <>({cartitemcount})</>}
      </button>
    </div>
  )
}

export default Product
