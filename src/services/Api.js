const getApiData = (searchRecipe) => {
  console.log(`www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`);
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`
  )
    .then((response) => {
      const text = response.text();
      console.log(text);
      return text;
    })
    .then((data) => {
      console.log(data);
      const dataClean = data.meals.map((recipe, index) => {
        return {
          recipeName: recipe.strMeal,
          category: recipe.strCategory,
          area: recipe.strArea,
          instructions: recipe.strInstructions,
          image: recipe.strMealThumb,
          ingredients: recipe.strIngredient1,
        };
      });
      return dataClean;
    });
};
export default getApiData;
