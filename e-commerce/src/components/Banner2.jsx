export default function Banner2(props) {
  return (
    <div className="row banner-container2 container">


      <div className="container-banner2 position-relative">
        <div className="banner2-img-container d-flex justify-content-center ">
          <img className="img-fluid" src="image/notebook-banner.png" alt="" />
        </div>
        <div className="col-6">
          <div className="banner2-text-container text-center">
            <button type='button' className="btn btn-warning text-white"> New Laptop</button>
            <div className="banner2-text">Sale up to 50% off</div>
            <div className="banner2-text-small">12 inch hd display</div>
            <button type='button' className="btn btn-warning text-white"> Shop Now</button>

          </div>
        </div>

      </div>




    </div >
  );
}
