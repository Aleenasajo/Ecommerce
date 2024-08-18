import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
 const ProductDisplay =(props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    return(
        <div className='productdisplay'>
            <div className="productdisplayleft">
                <div className="productdisplayimglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-imagee">
                    <img className='productdisplay-main-img'src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplayright'>
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-rigt-prices">
                    <div className="productdisplay-rigt-prices-old">
                    ₹{product.old_price}
                    </div>
                    <div className="productdisplay-rigt-prices-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-desc">
                Sleek Wool Blend Overcoat Crafted from a premium wool blend, this coat offers both warmth and sophistication.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        
                    </div>

                </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplat-right-category'><span>Category:</span>men,women,T-shirt,crop top</p>
            <p className='productdisplat-right-category'><span>Tags:</span>modern ,latest,</p>

            </div>

        </div>
    )
 }
 export default ProductDisplay