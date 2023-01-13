
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Products(props) {

    const [basket, setBasket] = useState(0)
    const [rating, setRating] = useState(0)
    const [isRed, setIsRed] = useState(false);


    const handleClose = () => props.setShow(!props.show);
    const handleShow = () => props.setShow(!props.show);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }
    // Optinal callback functions
    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value, index) => console.log(value, index)

    function addToBasket(props) {
        console.log("added to basket ---->  ID = " + props.id);
        setBasket(basket + 1)
        console.log('Basket size = ' + basket);
    }

    function addToWishlist(props) {
        console.log("added to Wishlist ---->  ID = " + props.id);
        // setBasket(wishlist + 1)
        // console.log('Basket size = ' + wishlist);
        // console.log(props.changeColor);

        setIsRed(true)

        // props.setChangeColor(true)

        let wishlistQty = props.wishlist.length;
        let isAdded = false;
        let wishlistIndex = -1;

        if (wishlistQty > 0) {
            props.wishlist.map((a, index) => {
                if (a.id == props.id) {
                    isAdded = true;
                    // props.setChangeColor('red');
                    // a.changeColor = true;
                    wishlistIndex = index;
                }
            })
            if (wishlistIndex != -1) {
                props.wishlist.splice(wishlistIndex, 1)
                props.setWishlist(props.wishlist.filter(a => a.id !== props.id))

                setIsRed(false)
                // props.setChangeColor(false)
            }
        }

        if (isAdded == false) {
            props.setWishlist([...props.wishlist, {
                id: props.id,
                title: props.title
            }])
            // props.setChangeColor('black');
            // props.setChangeColor(true)

        }
        // props.setWishlist(props.wishlist + 1)
    }

    return (
        <div className="product-card position-relative">
            <div className='wishlist-heart d-flex justify-content-end  position-absolute fs-3'>
                <a onClick={() => { addToWishlist(props) }}>

                    {/* <i className="bi bi-heart-fill" style={{ color: props.changeColor }}></i> */}




                    <i className="bi bi-heart-fill" style={{ color: isRed ? 'red' : 'black' }}>
                    </i>


                    {/* <i className="bi bi-heart-fill" style={{ color: props.changeColor ? 'red' : 'black' }}>
                    </i> */}



                </a>
            </div>
            <div className='position-relative'>

                <div className="product-img-container " onClick={handleShow}>
                    <img src={props.imgUrl} alt="image" />
                </div>

                <div className="product-text" >
                    <div className="title" onClick={handleShow}>{props.id} <span className='space'></span>{props.title}</div>
                    <div className="price" onClick={handleShow}>${props.price}</div>
                    <div className='product-ratings'>
                        <Rating
                            onClick={handleRating}
                            // onPointerEnter={onPointerEnter}
                            // onPointerLeave={onPointerLeave}
                            // onPointerMove={onPointerMove}
                            initialValue={props.rating}
                            allowFraction={true}
                            size={15}
                        />
                    </div>
                    <div className="basket-icon text-center text-light">
                        <a onClick={() => { addToBasket(props) }}><i class="bi bi-cart3"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.id}
                    {props.title}
                    {props.imgUrl}
                    {/* <img src={props.imgUrl} alt="product Image" /> */}


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>







        </div >

    )
}
export default Products