import React, { createContext, useState } from 'react'
import { Products } from '../products/Products'


//WHAT WE ARE DOING IS WE ARE MAKING A ARRAY WHICH WILL KEEP INFO OF ALL THE ITEMS AND FUNCTION TO ADD AND REMOVE FROM THAT ARRAY AND WE ARE PASSING THIS ARRAY AS CONTEXT PROVIDER

export const Shoppingcontext= createContext(null);
//create a context here with all the logic and just pass it wherever needed

const getDefaultCart = ()=>{
  let cart = {}
  for(let i=1;i<Products.length+1;i++){
    cart[i]=0;
  }
  return cart;
  //this will make an array for all products with count of each item as 0 inside A cart array
}

function ShopContextProvider(props) {
  
  const [cartitems,setcartitems] =useState(getDefaultCart());
  //in addtocart a id needs to be passed so that is done

  const Totalamount = ()=>{
    let Total=0;
    for(const item in cartitems){
      if(cartitems[item]>0){
        let itemInfo = Products.find((product)=>product.id === Number(item));
        Total+= cartitems[item]*itemInfo.price;
      }
    }
    return Total;
  }

  const addTocart = (id)=>{
    setcartitems((prev)=>({...prev,[id]:prev[id]+1}));
    //in the array where all item are set 0 , this will grab the previous value and assign the same and just add one to that item whose id is passed as prop
  }

  const remfrocart = (id)=>{
    setcartitems((prev)=>({...prev,[id]:prev[id]-1}));
  }

  const updatecartitemcount = (newAmount,itemId)=>{
    setcartitems((prev)=>({...prev,[itemId]: newAmount}));
  }

  const contextVal = {cartitems,addTocart,remfrocart,updatecartitemcount,Totalamount};
  console.log(cartitems);

  //put everything in a variable and pass the variable in value of context provider
  return (
    <Shoppingcontext.Provider value={contextVal}>
      {props.children}
    </Shoppingcontext.Provider>
  )
}

export default ShopContextProvider
