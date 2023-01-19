import ImageGallery from 'react-image-gallery'
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  console.log(product);
  console.log(product.imgUrl);
  console.log("length review = ", product.length);


  // const images = [
  //   {
  //     original: `../${product.imgUrl}`,
  //     thumbnail: `../${product.imgUrl}`,
  //   },
  //   {
  //     original: `../${product.imgUrl}`,
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  // ];

  console.log(product.imgUrl)
  // const images = product.imgUrl.map(imgUrl => {
  //   {
  //     original: `../${imgUrl}`,
  //       thumbnail: `../${imgUrl}`
  //   }
  // })


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

        {/* <img src={`../${product.imgUrl}`} alt="" /> */}
      </div>





    </div >
  );
}

export default ProductDetails;
