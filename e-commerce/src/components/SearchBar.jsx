export default function SearchBar() {
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
              <i className="bi bi-suit-heart">
                <span className="position-absolute top-10 start-95 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
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
      </div>
    </div>
  );
}
