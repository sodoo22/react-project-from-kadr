function Category(props) {
    return (
        <div className="">
            <div className="category-card d-flex">
                <div className="card-img-container">
                    <img src={props.imgUrl} alt="image" />
                </div>
                <div className="category-text text-center">
                    <div className="title">{props.title}</div>
                    <div className="item text-center">{props.items}</div>
                </div>

            </div>
        </div>
    )
}

export default Category