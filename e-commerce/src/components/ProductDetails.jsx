import { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ToastContainer, toast } from "react-toastify";
import ProductReview from './ProductReview'
import ProductDescription from './ProductDescription'


function ProductDetails(props) {
  const location = useLocation();
  const product = location.state;
  const [orderQty, setOrderQty] = useState(1);
  const [colorSelected, setColorSelected] = useState(0);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  console.log(product.description, "Description")
  console.log(product.reviews, "reviews")

  const notifyBasketAdd = () =>
    toast.success(product.title + "-г сагсанд амжилттай нэмлээ.! ", {
      icon: <i class="bi bi-cart-check"></i>,
    });

  const notifyBasketRemove = () =>
    toast.error(product.title + "-г сагснаас амжилттай устгалаа.! ", {
      icon: <i class="bi bi-trash3"></i>,
    });



  //  Сагсанд хийх function
  function addToBasket(props) {
    console.log("added to Basket ---->  ID = " + product.id);
    let basketQty = props.basket.length;
    let isAdded = false;

    if (basketQty > 0) {
      props.basket.map((a, index) => {
        if (a.id == product.id) {
          isAdded = true;
        }
      });
      if (isAdded) {
        notifyBasketRemove();
        props.setBasket(props.basket.filter((a) => a.id !== product.id));
      }
    }

    if (isAdded == false) {
      notifyBasketAdd();
      props.setBasket([
        ...props.basket,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          imgUrl: product.imgUrl,
          orderQty: orderQty,
          selectedColor: returnSelectedColor(colorSelected),
          selectedSize: returnSelectedSize(sizeSelected),
        },
      ]);
    }
  }

  // Сонгосон өнгийг буцаана. Brown, White, Brown etc. 
  function returnSelectedColor(colorSelected) {
    // console.log(product.color, "color=")
    return product.color.filter((c, index) => index == colorSelected)
  }

  // Сонгосон хэмжээг буцаана. 1' , 2' etc 
  function returnSelectedSize(sizeSelected) {
    // console.log(product.size, "color=")
    return product.size.filter((c, index) => index == sizeSelected)
  }

  // Сагсанд байгаа эсэхийг шалгах function
  function inBasket(id) {
    // console.log("Product id = " + id);
    let result = false;
    props.basket.map((a) => {
      if (a.id == id) {
        // console.log("Product id  FOUND = " + id);
        result = true;
      }
    });
    return result; // утгаа буцаая
  }

  // color render хийх function
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

    // console.log(colorStyle);
    return (
      <div
        className="color"
        key={index}
        style={colorStyle}
        onClick={(e) => setColorSelected(index)}
      ></div>
    );
  });

  // size render хийх function
  const sizes = product.size.map((s, index) => {
    let sizeStyle = {};
    if (index == sizeSelected) {
      sizeStyle = {
        border: "solid 3px red",
      };
    }
    // console.log("sizeStyle", sizeStyle);

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
        </div>

        <div className="details-container">
          <div className="title">{product.title} </div>
          <div className="price">${product.price} </div>
          <div className="product-ratings">
            <Rating
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

            {inBasket(product.id) ? (<button type="button" className="btn-basket-yellow red btn-common" onClick={() => {
              addToBasket(props)
            }}>
              Remove from cart
            </button>) : (<button type="button" className="btn-basket-yellow btn-common" onClick={() => {
              addToBasket(props)
            }}>
              Add to cart
            </button>)}

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

        </div>
      </div>

      <div >
        <div className="description-container">
          <button type="button" className={showDescription ? "btn-reviews btn-common" : "btn-description btn-common"} onClick={() => { setShowDescription(true) }}>
            Description
          </button>
          <button type="button" className={showDescription ? "btn-description btn-common " : "btn-reviews btn-common"} onClick={() => { setShowDescription(false) }}>
            Reviews
          </button>
        </div>

        {showDescription ?
          (
            <ProductDescription
              description={product.description}
              showDescription={showDescription}
              setShowDescription={setShowDescription} />
          )
          : (
            <ProductReview
              reviews={product.reviews}
              showDescription={showDescription}
              setShowDescription={setShowDescription} />
          )
        }


      </div>



      <div className="related-products container">
        <div className="header">Related Products</div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ProductDetails;
