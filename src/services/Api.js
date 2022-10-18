const getApiData = (searchRecipe) => {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.meals.map((recipe, index) => {
        return {
          recipeName: recipe.strMeal,
          category: recipe.strCategory,
          area: recipe.strArea,
          instructions: recipe.strInstructions,
          image: recipe.strMealThumb,
          ingredients: recipe.strIngredient1,
          id: index.toString(),
        };
      });
      return dataClean;
    });
};
export default getApiData;
