import axios from "axios";

async function fetchPopularCategory(url, setCat) {
  const result = await axios.get(url);
  setCat(result.data);
}

async function fetchProducts(url, setProducts) {
  const result = await axios.get(url);
  setProducts(result.data);
}

export { fetchPopularCategory, fetchProducts };
