import React from 'react';
import './Cart.css'
const Cart = (props) => {
  







    
    const {cart} = props;
    console.log(cart)
    const totalReduce = (previous, cart)=> previous + cart.sellarry;  
const name = (previous, cart)=> previous + cart.name;

  let total = cart.reduce(totalReduce, 0);

  let NAME = cart.reduce(name, 0)
 
 
  
  
    return (
        <div className="Cart">
             <h1>Person: {props.cart.length}  </h1>
             <p>Name: {
                    <ul>  <li>   {NAME}  </li></ul>
                      } </p>
       
            <h3>Selary: {total} </h3>
       
            
        </div>
    );
};

export default Cart;