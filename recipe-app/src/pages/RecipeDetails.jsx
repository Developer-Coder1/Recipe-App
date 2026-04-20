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
      <button onClick={() => navigate(-1)} className="backbtn">
        Back
      </button>
      {!meal ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="recipe-detail">
          <img src={meal.strMealThumb} />
          <div className="detail-info">
            <h1>{meal.strMeal}</h1>
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Instructions:</strong> {meal.strInstructions}
            </p>
            <a href={meal.strSource} target="_blank">
              View Full Recipe
            </a>
          </div>
        </div>
      )}
    </>
  );
}
