import { useNavigate } from "react-router";
export function Recipe({ meals }) {
  const navigate = useNavigate();
  if (!meals) return null;
  return (
    <div className="recipes-grid">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          className="recipe-card"
        >
          <img src={meal.strMealThumb} />
          <h1>{meal.strMeal}</h1>
        </div>
      ))}
    </div>
  );
}
