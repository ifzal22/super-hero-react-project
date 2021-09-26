import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Mans from '../Mans/Mans';
import'./Pogrammer.css'

const Pogrammer = () => {
    const [mans, setMans] = useState([]);
    const [cart , setCart] = useState([]);


    useEffect( ()=>{
        fetch('./manifest.json')
        .then(res => res.json())
        .then(data => setMans(data))
    },[]);



    const handAddcard = (man) => {
        const newCart = [...cart, man];
        setCart(newCart);

    }
    return (
       <div style={{marginTop:"40px"}}>


            <div className="container" >
            <div className="man-container" >
            {
               mans.map(man =><Mans 
                key={man.id}
               man={man}
               handAddcard = {handAddcard}>
                   
               </Mans> )
               
           }
            </div>


            <div className="man-cart">
<div >
    
       <Cart
       cart={cart}></Cart>    
</div>
            </div>
          
        </div>
       </div>
    );
};

export default Pogrammer;