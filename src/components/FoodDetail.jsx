import { useEffect, useState } from "react";
import style from "./foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1fa82f0cabea40f483af9013ab615688";

  useEffect(() => {
    async function fetchFood() {
      let res = await fetch(`${URL}?apiKey=${API_KEY}`);
      let data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}>{food.title}</h1>
        <div className={style.imageContainer}>
          <img
            className={style.recipeImage}
            src={food.image}
            alt={food.title}
          />
        </div>
        <div className={style.recipeDetail}>
          <span>
            <strong> ⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList isLoading={isLoading} food={food} />
        <h2>Instructions</h2>
        <div className={style.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
