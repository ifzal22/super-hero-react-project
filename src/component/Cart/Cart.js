import React, { useEffect, useState } from 'react';
import Mans from '../Mans/Mans';
import './Cart.css'
const Cart = (props) => {
  
console.log(props)


    
    const {cart} = props;
    
    const totalReduce = (previous, cart)=> previous + cart.sellarry;  


  let total = cart.reduce(totalReduce, 0);


 
  const displayNameUi = props.cart.map(name => <p>
    
      <div><img className="b-img" src={name.img} alt="" /></div>  {name.name}  </p>  )



  
    return (
        <div className="Cart">

     
             <h1>Person: {props.cart.length}  </h1>
            
                     Name: <ul>{displayNameUi} </ul>
       
            <h3>Selary: {total} </h3>
       
            
        </div>
    );
};

export default Cart;