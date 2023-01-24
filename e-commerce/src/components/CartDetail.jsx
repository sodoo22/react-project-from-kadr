import { useState } from "react";

export default function CartDetail(props) {
    let product = props;
    const [orderQty, setOrderQty] = useState(product.orderQty);
    return (

        <tr>
            <th scope="row">{product.counter + 1}</th>
            <td className="d-flex">
                <div className="d-flex">
                    <div className="img"><img src={product.imgUrl[0].original} alt="myWishList.title" /></div>
                    <div className="d-flex flex-column">
                        <div className="title">{product.title}</div>
                        <div id="color">Color: {product.selectedColor}</div>
                        <div id="size">Size: {product.selectedSize}</div>
                    </div>
                </div>
            </td>
            <td>${product.price}</td>
            <td className="order-qty">
                <button onClick={() => setOrderQty(orderQty - 1)}>-</button>
                <span className="orderQty space"> {orderQty} </span>
                <button onClick={() => setOrderQty(orderQty + 1)}>+</button>
            </td>
            <td>dfsf</td>
        </tr>

    )
}