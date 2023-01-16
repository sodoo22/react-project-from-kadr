import { useState } from "react";

export default function SearchBar(props) {
  const [hidewish, setHidewish] = useState(false);




  function handleBasket() {
    if (props.basket.length > 0) {
      let basket = document.getElementById("basket-container");

      if (basket.style.display != "block") {
        basket.style.display = "block";
      } else {
        basket.style.display = "none";
      }
    }
  }

  function removeFromBasket(id, props) {
    console.log("--------To remove from Basket ");
    console.log("Basket remove ID = " + id);
    props.setBasket(props.basket.filter((a) => a.id !== id));
  }


  console.log("Wishlist array = ")
  console.log(props.wishlist)



  function handleWishlist() {
    if (props.wishlist.length > 0) {
      let wishlist = document.getElementById("wishlist-container");

      if (wishlist.style.display != "block") {
        wishlist.style.display = "block";
      } else {
        wishlist.style.display = "none";
      }
    }
  }

  console.log("Basket array = ")
  console.log(props.basket)


  function removeFromWishlist(id, props) {
    console.log("--------To remove from wishlist ");
    console.log("wishlist remove ID = " + id);
    props.setWishlist(props.wishlist.filter((a) => a.id !== id));
  }



  function closeWishlist() {
    if (props.wishlist.length > 0) {
      let wishlist = document.getElementById("wishlist-container");
      wishlist.style.display = "none";
    }
  }

  function closeBasket() {
    if (props.basket.length > 0) {
      let basket = document.getElementById("basket-container");
      basket.style.display = "none";
    }
  }

  return (
    <div className="searchbar-container">
      <div className="container">
        <div className="row xx">
          <div className="logo-container col-4 col-md-3">
            <img src="image/content/logo1.png" alt="" />
          </div>

          <div className="col-6 col-md-4 d-none d-md-block">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-warning">
                search
              </button>
            </div>
          </div>

          <div className="col-sm-1"></div>
          <div className="col-12 col-sm-5 col-md-4 justify-content-center signin-container">
            <div className="signin">
              <i className="bi bi-person"></i>
              <span className="space"> </span>
              Sign in
            </div>
            <div className="favorite">
              <i className="bi bi-suit-heart" onClick={handleWishlist}>
                {props.wishlist.length > 0 ? (
                  <div id="wishSize">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {props.wishlist.length}
                    </span>
                  </div>
                ) : (
                  <p></p>
                )}
              </i>
            </div>
            <div className="basket">
              <i className="bi bi-cart" onClick={handleBasket}>
                {props.basket.length > 0 ? (
                  <div id="basketSize">
                    <span className="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger">
                      {props.basket.length}
                    </span>
                  </div>
                ) : (
                  <p></p>
                )}
              </i>
            </div>
          </div>
        </div>

        {props.wishlist.length > 0 ? (
          <div id="wishlist-container">
            <a onClick={() => closeWishlist()}><i className="bi bi-x-circle-fill close-btn"> </i></a>
            <h3>My wishlist</h3>

            {props.wishlist.map((myWishList, index) => {
              return (
                <div key={index} className="d-flex justify-content-between">
                  ID: {myWishList.id} <span className="space"></span>
                  <div className="d-flex justify-content-between">
                    {myWishList.title} <span className="space"></span>
                    <a onClick={() => removeFromWishlist(myWishList.id, props)}>
                      <i className="bi bi-x-circle-fill"> </i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}

        {props.basket.length > 0 ? (
          <div id="basket-container">
            <a onClick={() => closeBasket()}><i className="bi bi-x-circle-fill close-btn"> </i></a>
            <h3>My basket</h3>

            {props.basket.map((basket, index) => {
              return (
                <div key={index} className="d-flex justify-content-between">
                  ID: {basket.id} <span className="space"></span>
                  <div className="d-flex justify-content-between">
                    {basket.title} <span className="space"></span>
                    <a onClick={() => removeFromBasket(basket.id, props)}>
                      <i className="bi bi-x-circle-fill"> </i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}


      </div>
    </div >
  );
}
