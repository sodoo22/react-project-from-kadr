import MainMenu from "./MainMenu";
import Banner from "./Banner";
import AliceCarousel from "react-alice-carousel";
import carouselData from "../data/carousel";

import bannerData from "../data/banner-items";
import popProductsData from "../data/popular";

import Category from "./Category";
import Products from "./Products";
import React, { useEffect } from "react";
import Poster from "./Poster";
import ProductsPart2 from "./ProductsPart2";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CallService from "./CallService";

import { Link, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import NotFound from "./NotFound";
import { ToastContainer, toast } from "react-toastify";
import { fetchPopularCategory, fetchProducts } from "../services/fetchData";

function Search() {
  const [productsData, setProducts] = useState([]);

  const PRODUCT_URL = "http://localhost:8080/api/products";

  useEffect(() => {
    fetchProducts(PRODUCT_URL, setProducts);
  }, []);

  console.log(productsData);

  // populate data between 2 ranges (array)
  function populateProduct(min, max) {
    const products = productsData.map((data, index) => {
      if (index >= min && index <= max) {
        return (
          <Products
            id={data.id}
            title={data.title}
            imgUrl={data.imgUrl}
            price={data.price}
            rating={data.rating}
            reviews={data.reviews}
            quantity={data.quantity}
            color={data.color}
            size={data.size}
            description={data.description}
          />
        );
      }
    });

    return products;
  }

  return (
    <div className="App">
      <div id="product-container" className="container">
        <AliceCarousel autoPlay autoPlayInterval="8000" disableButtonsControls>
          <div className="product-cards-container">{populateProduct(0, 7)}</div>
          <div className="product-cards-container">
            {populateProduct(8, 15)}
          </div>
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Search;
