const Base_URl = "https://www.themealdb.com/api/json/v1/1"

export async function getMeal(id) {
  const response = await fetch(`${Base_URl}/lookup.php?i=${id}`)
  const data = await response.json()
  return data.meals[0]
}

export async function getMealsBySearch(query) {
  const response = await fetch(`${Base_URl}/search.php?s=${query}`)
 const data = await response.json()
 return data.meals
}