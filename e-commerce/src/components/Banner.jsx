export default function Banner() {
    return (
        <div className="row banner-container mt-4">
            <div className="col-5 d-flex flex-column text-center banner-text">
                <div className="text1">
                    Canon Cameras
                </div>
                <div className="button1">
                    <button type='button' className="btn btn-warning text-white"> Shop Now</button>
                    <button type="button" className="btn btn-outline-light text-dark border">View More</button>
                </div>
            </div>

            <div className="col-2">
            </div>

            <div className="col-5 promotion" style={{ position: 'relative' }}>
                <div className="promotion-price">Only<br /> $89</div>
                <img src='..\..\image\camera.png' ></img>
            </div>
        </div >
    )

}