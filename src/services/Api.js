const getApiData = (props) => {
  return fetch(
    `www.themealdb.com/api/json/v1/1/search.php?s=${props.searchRecipe.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((recipe, index) => {
        return {
          recipeName: recipe.strMeal,
          category: recipe.strCategory,
          area: recipe.strArea,
        };
      });
      return dataClean;
    });
};
export default getApiData;
