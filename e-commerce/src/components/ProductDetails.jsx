import ImageGallery from 'react-image-gallery'
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  console.log(product);
  console.log(product.imgUrl);
  console.log("length review = ", product.length);

  console.log(product.imgUrl)

  const colors = product.color.map((col, index) => {
    let colorStyle = {
      backgroundColor: `${col}`
    }
    console.log(colorStyle)
    return <div className='color' key={index} style={colorStyle} >
    </div >
  });

  return (
    <div className="product-details container">

      <div className="img-container">
        <ImageGallery items={product.imgUrl} />
        {/* <img src={`../image/play.png`} alt="" /> */}

      </div>
      <div className="details-container">
        <div className='title'>{product.title} </div>
        <div className='price'>${product.price} </div>
        <div className="product-ratings">
          <Rating
            // onClick={handleRating}
            // onPointerEnter={onPointerEnter}
            // onPointerLeave={onPointerLeave}
            // onPointerMove={onPointerMove}
            initialValue={product.rating}
            allowFraction={true}
            size={35}
          />
          {product.reviews.length > 0 ? (< span className='space'>  {product.reviews.length} reviews</span>) : (<span className='space'>No reviews</span>)}
        </div>
        <div className='availability'>Availability: {product.quantity > 0 ? (< span className='space text-success'> In Stock </span>) : (<span className='space text-danger'>Out of stock</span>)}
        </div>
        <div className='qty'>
          {product.quantity > 0 ? (< span>  Hurry up! only {product.quantity} product left in stock!</span>) : (<span> {product.quantity} product left in stock!</span>)}
        </div>
        <div className='color-container'>
          {/* {product.color.length > 0 ? (< span>  </span>) : (<span> </span>)} */}
          Color: {colors}
        </div>

        {/* <img src={`../${product.imgUrl}`} alt="" /> */}
      </div>





    </div >
  );
}

export default ProductDetails;
