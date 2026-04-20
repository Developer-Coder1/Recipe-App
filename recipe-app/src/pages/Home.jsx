import { useState, useEffect } from 'react'
import {getMealsBySearch} from '../api/meal'
import { Recipe } from '../components/RecipeCard'



export function Homepage() {
  const [meals, setMeals] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchMeals = async() => {
      const data = await getMealsBySearch("");
      setMeals(data);
    }
    fetchMeals();
  }, [])
  const handleSearch = async() => {
   const data = await getMealsBySearch(query);
   setMeals(data);
  }

  return (
    <div className="home">
      <input type="text" placeholder="Search meal here" onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch()}/>
      <button onClick={handleSearch}>Search</button> 
      <Recipe meals={meals} />
    </div>
  )
}