import React from 'react';
import './Mans.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart,  } from '@fortawesome/free-solid-svg-icons'

import Rating from 'react-rating';

const Mans = (props) => {
  
    const {name,Age,img, sellarry,company,about,star} = props.man
    const element = <FontAwesomeIcon icon={ faShoppingCart} />
   
   

   
  
 
    return (
        <div className="man-document">

            <div className="img">
            <img src={img} alt="" />
            </div>
          

            <h1>{name}</h1>
            <h5>Age: {Age}</h5>
            <h5>Salary: {sellarry} </h5>
<p className="star">
<Rating readonly
 initialRating={star}
 fullSymbol="fas fa-star fa-2px"
 emptySymbol="far fa-star fa-2px">
   </Rating>
</p>

            <h5>Company:  {company}</h5> 

            <p><span className="about"> About:  </span> {about}</p>
  
<button onClick={()=>props.handAddcard(props.man)} className="BTN"> {element} add card</button>

  </div>
      
    );
};

export default Mans;