

export default function Banner(props) {

    return (
        <div className="row banner-container">
            <div className="col-md-5 d-flex flex-column text-center banner-text">
                <div className="text1">
                    {props.title}
                </div>
                <div className="text-short">
                    {props.shortMessage}
                </div>
                <div className="button1">
                    <button type='button' className="btn btn-warning text-white"> Shop Now</button>
                    <button type="button" className="btn btn-outline-light text-dark border">View More</button>
                </div>
            </div>

            <div className="col-md-1">
            </div>

            <div className="col-md-5 promotion" style={{ position: 'relative' }}>
                <div className="promotion-price">Only<br /> ${props.price}</div>
                <div className="banner-img-container">
                    <img src={props.imgUrl} ></img>
                </div>

            </div>
        </div >
    )

}