function RecipeList(props) {
  const movieResult = props.recipeFilters.map((recipe, index) => {
    return (
      <li key={index} className="list__list--recipe">
        <img src={props.recipe.strMealThumb} alt="" />
        <h4>{props.recipe.strMeal}</h4>
        <p>{props.recipe.strInstructions}</p>
      </li>
    );
  });
  return (
    <>
      <div className="main">
        <section className="list">
          <h2 className="list__title">List</h2>
          <ul className="list__list">{movieResult}</ul>
        </section>
        <section className="buttons">
          <button>Search a recipe</button>
          <button>Random recipe</button>
        </section>
      </div>
    </>
  );
}
export default RecipeList;
