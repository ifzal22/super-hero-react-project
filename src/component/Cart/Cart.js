import React, { useEffect, useState } from 'react';
import './Cart.css'
const Cart = (props) => {
  


const [autor, setAutor] = useState([]);
useEffect(()=>{
    fetch('./manifest.json')
    .then(res => res.json())
    .then(data => setAutor(data))
},[])


const  handAddcard = (auto) =>{
    const newName = [...autor, auto];
    setAutor(newName);
}

    
    const {cart} = props;
    console.log(cart)
    const totalReduce = (previous, cart)=> previous + cart.sellarry;  
const name = (previous, cart)=> previous + cart.name;

  let total = cart.reduce(totalReduce, 0);

  let NAME = cart.reduce(name, 0)
 console.log(NAME)
 
  
  
    return (
        <div className="Cart">

            {
                autor.map(auto => <p>{}</p>
                    )
            }
             <h1>Person: {props.cart.length}  </h1>
             <p>Name: {
                    <p>{NAME} </p>
                      } </p>
       
            <h3>Selary: {total} </h3>
       
            
        </div>
    );
};

export default Cart;