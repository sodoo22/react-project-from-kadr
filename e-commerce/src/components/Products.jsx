import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


function Products(props) {

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    function addToBasket(props) {
        console.log("added to basket");
        console.log(props.id)
    }


    return (
        <div className="product-card">
            <div className="product-img-container">
                <img src={props.imgUrl} alt="image" />
            </div>
            <div className="product-text">
                <div className="">{props.title}</div>
                <div className="">${props.price}</div>
                <div className='product-ratings'>
                    <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        initialValue={props.rating}
                        allowFraction={true}
                        size={15}
                    />
                </div>
                <div className="basket-icon text-center text-light">
                    <a onClick={() => { addToBasket(props) }}><i class="bi bi-cart3"></i>
                    </a>
                </div>
            </div>



        </div>

    )
}
export default Products