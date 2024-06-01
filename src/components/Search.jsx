import { useEffect, useState } from "react";
import style from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "1fa82f0cabea40f483af9013ab615688";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //   useEffect(() => {}, [query]);

  async function fetchfoodData() {
    let res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    let data = await res.json();
    setFoodData(data.results);
  }
  function handleSearch(e) {
    console.log("handleSearch");
    fetchfoodData();
  }
  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button className={style.button} onClick={handleSearch}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
