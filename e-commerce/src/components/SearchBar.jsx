export default function SearchBar(props) {

  function handWishlist() {
    console.log("wishlist button clicked")
    let wishlist = document.getElementById('wishlist-container');
    console.log(wishlist)
    if (wishlist.style.display != "block") {
      wishlist.style.display = "block"
    } else {
      wishlist.style.display = "none"
    }
  }


  console.log(props.wishlist.length);


  console.log(props.wishlist)

  function removeFromWishlist(id) {
    console.log("---------------------To remove")
    console.log("wishlist remove ID = " + id)
    // props.setWishlist(props.wishlist.filter(a => a.id !== id))
    // props.setWishlist(props.wishlist)
    // props.wishlist.filter(a => {

    // }
    // )
  }

  return (
    <div className="searchbar-container">
      <div className="container">
        <div className="row">
          <div className="logo-container col-3">
            <img src="image/content/logo1.png" alt="" />
          </div>

          <div className="col-4">
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

          <div className="col-2"></div>
          <div className="col-3 signin-container">
            <div className="signin">
              <i className="bi bi-person"></i>
              <span className="space"> </span>
              Sign in
            </div>
            <div className="favorite">
              <i className="bi bi-suit-heart" onClick={handWishlist}>

                {props.wishlist.length > 0 ?
                  <div id='wishSize'>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {props.wishlist.length}
                    </span>
                  </div> :
                  <p></p>}
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
        <div id="wishlist-container">

          <h3>
            My wishlist
          </h3>

          {props.wishlist.map((myWishList, index) => {
            return (
              <div key={index} className="d-flex justify-content-between">
                ID: {myWishList.id} <span className="space"></span>
                <div className="d-flex justify-content-between">
                  {myWishList.title} <span className="space"></span>
                  <i className="bi bi-x-circle-fill" onClick={removeFromWishlist(myWishList.id)}> </i>
                </div>
              </div>
            )
          })}

        </div>

      </div>

    </div>
  );
}