import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
    <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
       
    </div>
    <div className="descriptionbox-description">
            <p>An e-commerce website is an online flatform that 
                facilitates buying and selling of products or services over the internet
                and serves as a virtual marketplace where businesses and individual
                showcase their products, interact with customers, and conduct transactions
                without the need for physical presence.</p>
                <p> E-commerce websites typically display products or services along with 
                    detailed descriptions, images,prices, and any available
                        variations.</p>
            </div>
    
        </div>
      )
}

export default DescriptionBox