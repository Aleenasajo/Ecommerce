import React from 'react'
import './Popularmen.css'
import data_product from '../Assets/datas'
import Item from '../Items/Itemsmen'
const Popularmen = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN MEN</h1>
            <hr/>
            <div className='popular-item'>
                {data_product.map((item,i)=>{
                    return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>

        </div>
    )
}
export default Popularmen