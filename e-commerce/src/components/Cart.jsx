import { useState } from "react";
import { useLocation } from "react-router-dom";
import CartDetail from "./CartDetail";


function Cart() {
    const location = useLocation();
    const productData = location.state;
    console.log("product = ")
    console.log(productData)


    // const [orderQty, setOrderQty] = useState(1);
    // const [colorSelected, setColorSelected] = useState(0);
    // const [sizeSelected, setSizeSelected] = useState(0);
    // console.log(productData.imgUrl);

    const items = productData.map((product, index) => {
        return (
            <CartDetail
                counter={index + 1}
                id={product.id}
                title={product.title}
                price={product.price}
                imgUrl={product.imgUrl}
                orderQty={product.orderQty}
                selectedColor={product.selectedColor}
                selectedSize={product.selectedSize}
            />)

    })

    return (
        <div>
            <div className="cart container">

                <div className="cart-details-container">
                    <div className="header">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Subtotal</div>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col header">#</th>
                                <th scope="col"> Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>

                            {console.log("items =" + items)}
                            {items}

                        </tbody>
                    </table>

                </div>
                <div className="cart-total-container">
                </div>



            </div>
        </div>

    )
}

export default Cart;
