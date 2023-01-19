import { useLocation } from "react-router-dom";
function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  console.log(product);
  console.log(product.imgUrl);
  return (
    <div className="details-container">
      Details page
      <p>{product.title} </p>
      <img src={`../${product.imgUrl}`} alt="" />
    </div>
  );
}

export default ProductDetails;
