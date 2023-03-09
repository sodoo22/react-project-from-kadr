import axios from "axios";

async function fetchPopularCategory(url, setCat) {
  const result = await axios.get(url);
  setCat(result.data);
}

export default fetchPopularCategory;
