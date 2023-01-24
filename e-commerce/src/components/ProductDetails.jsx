import { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  const [orderQty, setOrderQty] = useState(1);
  const [colorSelected, setColorSelected] = useState(0);
  const [sizeSelected, setSizeSelected] = useState(0);

  // console.log(product.imgUrl);
  // console.log("length review = ", product.length);

  console.log(product.imgUrl);

  const productReviews = product.reviews.map((r, index) => {
    console.log("review", r.review);
    return (
      <div key={index}>
        <b>
          <i>{r.customer}</i>
        </b>
        :{r.review}
      </div>
    );
  });

  console.log("productReviews=" + productReviews);

  const colors = product.color.map((col, index) => {
    let colorStyle = "";
    if (index == colorSelected) {
      colorStyle = {
        backgroundColor: `${col}`,
        border: "solid 3px red",
      };
    } else {
      colorStyle = {
        backgroundColor: `${col}`,
      };
      // setColorSelected(false);
    }

    console.log(colorStyle);
    return (
      <div
        className="color"
        key={index}
        style={colorStyle}
        onClick={(e) => setColorSelected(index)}
      ></div>
    );
  });

  const sizes = product.size.map((s, index) => {
    let sizeStyle = {};
    if (index == sizeSelected) {
      sizeStyle = {
        border: "solid 3px red",
      };
    }
    console.log("sizeStyle", sizeStyle);

    return (
      <div
        className="size"
        key={index}
        style={sizeStyle}
        onClick={(e) => setSizeSelected(index)}
      >
        {s}
      </div>
    );
  });

  return (
    <div>
      <div className="product-details container">
        <div className="img-container">
          <ImageGallery items={product.imgUrl} />
          {/* <img src={`../image/play.png`} alt="" /> */}
        </div>

        <div className="details-container">
          <div className="title">{product.title} </div>
          <div className="price">${product.price} </div>
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
            {product.reviews.length > 0 ? (
              <span className="space"> {product.reviews.length} reviews</span>
            ) : (
              <span className="space">No reviews</span>
            )}
          </div>
          <div className="availability">
            Availability:{" "}
            {product.quantity > 0 ? (
              <span className="space text-success"> In Stock </span>
            ) : (
              <span className="space text-danger">Out of stock</span>
            )}
          </div>
          <div className="qty">
            {product.quantity > 0 ? (
              <span>
                {" "}
                Hurry up! only {product.quantity} product left in stock!
              </span>
            ) : (
              <span> {product.quantity} product left in stock!</span>
            )}
          </div>
          <div className="color-container">Color: {colors}</div>
          <div>
            {product.size.length > 0 && (
              <div className="size-container">Size: {sizes} </div>
            )}
          </div>
          <div className="order-qty d-flex text-center align-items-center">
            Quantity:{" "}
            <button onClick={() => setOrderQty(orderQty - 1)}>-</button>{" "}
            <div className="orderQty"> {orderQty} </div>{" "}
            <button onClick={() => setOrderQty(orderQty + 1)}>+</button>
          </div>
          <div className="button-container d-flex">
            <button type="button" className="btn-basket-yellow btn-common">
              Add to cart
            </button>
            <button type="button" className="btn-basket-yellow btn-common">
              Buy it now
            </button>

            <button type="button" className="btn-wishlist-white btn-common">
              <i class="bi bi-heart"></i>
            </button>
          </div>

          <div className="sku">Sku: 01133-9-9</div>

          <div className="category">
            Category: 20% off, 49% remote, Alex remote
          </div>

          <div className="share d-flex gap-3">
            Share: <i class="bi bi-google"></i>
            <i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i>
          </div>

          {/* <img src={`../${product.imgUrl}`} alt="" /> */}
        </div>
      </div>

      <div className="description-container">
        <button type="button" className="btn-description btn-common">
          Description
        </button>
        <button type="button" className="btn-reviews btn-common">
          Reviews
        </button>
      </div>

      <div className="reviews-container container d-flex flex-column">
        <div className="header">Customer reviews</div>
        <div className="reviews-txt">
          {/* {productReviews && productReviews} */}

          {productReviews != "" ? (
            <span className="space"> {productReviews} </span>
          ) : (
            <span className="space">No reviews</span>
          )}

          {/* {product.re} */}
          {/* {product.reviews.length > 0 ? (
            <span className="space"> {product.reviews.length} reviews</span>
          ) : (
            <span className="space">No reviews</span>
          )} */}
        </div>
        <button className="write-review-btn">Write a review</button>
      </div>

      <div className="related-products container">
        <div className="header">Related Products</div>
      </div>
    </div>
  );
}

export default ProductDetails;
