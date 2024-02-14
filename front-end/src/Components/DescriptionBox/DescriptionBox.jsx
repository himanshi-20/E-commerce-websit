import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.Here, shoppers can review more details when necessary.
            </p>
            <p>
                Displaying details like product names, images, sizes, colors, and prices in the shopping cart helps the shoppers remember each product, as well as compare products. Link products in the cart back to their full product pages. 
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox;
