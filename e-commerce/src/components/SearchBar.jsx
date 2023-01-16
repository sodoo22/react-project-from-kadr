import { useState } from "react";

export default function SearchBar(props) {
  const [hidewish, setHidewish] = useState(false);
  // let wishlist = document.getElementById("wishlist-container");

  // if (props.wishlist.length < 1) {
  //   wishlist.style.display = "none";
  // }

  function handWishlist() {
    console.log("wishlist button clicked");

    if (props.wishlist.length > 0) {
      let wishlist = document.getElementById("wishlist-container");
      console.log("wishlist size" + wishlist);

      if (wishlist.style.display != "block") {
        wishlist.style.display = "block";
      } else {
        wishlist.style.display = "none";
      }
    }
  }

  console.log(props.wishlist.length);

  console.log(props.wishlist);

  function removeFromWishlist(id) {
    console.log("---------------------To remove");
    console.log("wishlist remove ID = " + id);
    props.setWishlist(props.wishlist.filter((a) => a.id !== id));
    console.log("props.changeColor = " + props.changeColor);
    console.log(props.productColors)
    // console.log("props id = " + id)
    if (props.changeColor == true) {
      props.setChangeColor(false);
    } else {
      props.setChangeColor(true);
    }
    // props.setChangeColor(() => { props.setChangeColor(false) });
    // props.setWishlist(props.wishlist)
    // props.wishlist.filter(a => {

    // }
    // )
  }

  return (
    <div className="searchbar-container">
      <div className="container">
        <div className="row xx">
          <div className="logo-container col-6 col-md-3">
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
              <i className="bi bi-suit-heart" onClick={handWishlist}>
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
              <i className="bi bi-cart">
                <span className="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger">
                  5
                </span>
              </i>
            </div>
          </div>
        </div>

        {props.wishlist.length > 0 ? (
          <div id="wishlist-container">
            <h3>My wishlist</h3>

            {props.wishlist.map((myWishList, index) => {
              return (
                <div key={index} className="d-flex justify-content-between">
                  ID: {myWishList.id} <span className="space"></span>
                  <div className="d-flex justify-content-between">
                    {myWishList.title} <span className="space"></span>
                    <a onClick={() => removeFromWishlist(myWishList.id)}>
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
    </div>
  );
}
