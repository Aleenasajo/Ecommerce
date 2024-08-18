import React from 'react'
import './Itemmens.css'
import { Link } from 'react-router-dom'
const Itemsmen = (props) => {
    return(
        <div className='item'>
         <Link to={`/product/${props.id}`} ><img src={props.image} alt="" style={{ height: '250px', width: '250px' }}/></Link> 
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                ₹ {props.new_price}

                </div>
                <div className='item-price-old'>
                ₹{props.old_price}

                </div>
            </div>

        </div>
    )
}
export default Itemsmen