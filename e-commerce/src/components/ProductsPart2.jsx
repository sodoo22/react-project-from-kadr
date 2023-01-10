import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ProductsPart3 from './ProductsPart3';
import productsData from '../data/products';

function ProductsPart2(props) {

    const [rating, setRating] = useState(0)

    const style = { // container size
        width: "490px",
        height: "240px"
    }



    const products = productsData.map((data, index) => {
        if (index < 2) {
            return (
                <ProductsPart3
                    id={data.id}
                    title={data.title}
                    imgUrl={data.imgUrl}
                    price={data.price}
                    rating={data.rating}
                    containerStyle={style}
                />
            )
        }
    })

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
        <div className='d-flex'>
            <div className="product-card part2 d-flex flex-row" >
                <div className="product-img-container part2-img-container">
                    <img className='ms-3' src={props.imgUrl} alt="image" />
                </div>
                <div className="product-text">
                    <div className="title">{props.title}</div>
                    <div className="price">${props.price}</div>
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
                    <button type='button' className="btn-basket">
                        <div className="btn-text">Add to cart
                        </div>
                        <div className="basket-icon2 text-center text-light">
                            <a onClick={() => { addToBasket(props) }}><i class="bi bi-cart3"></i>
                            </a>
                        </div>
                    </button>
                </div>
            </div>

            <div className="product-cards-container">
                {products}
            </div>

        </div>

    )
}
export default ProductsPart2