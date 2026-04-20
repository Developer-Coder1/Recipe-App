import { useState, useEffect } from "react";
import { getMeal } from "../api/meal";
import { useNavigate, useParams } from "react-router";

export function RecipeDetail() {
  const [meal, setMeal] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeal = async () => {
      const data = await getMeal(id);
      setMeal(data);
    };
    fetchMeal();
  }, [id]);
  return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
      {!meal ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={meal.strMealThumb} /><h1>{meal.strMeal}</h1>
          <p>{meal.strCategory}</p>
          <p>{meal.strInstructions}</p>
          <p>{meal.strSource}</p>
        </div>
      )}
    </>
  );
}
