
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Products(props) {

    const [basket, setBasket] = useState(0)
    const [rating, setRating] = useState(0)

    const handleClose = () => props.setShow(!props.show);
    const handleShow = () => props.setShow(!props.show);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    function addToBasket(props) {
        console.log("added to basket ---->  ID = " + props.id);
        setBasket(basket + 1)
        console.log('Basket size = ' + basket);
    }


    return (
        <div className="product-card">
            <div >
                <div className="product-img-container " onClick={handleShow}>
                    <img src={props.imgUrl} alt="image" />
                </div>
                <div className="product-text" >
                    <div className="title" onClick={handleShow}>{props.title}</div>
                    <div className="price" onClick={handleShow}>${props.price}</div>
                    <div className='product-ratings'>
                        <Rating
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
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