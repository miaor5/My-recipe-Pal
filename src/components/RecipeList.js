import RecipeItem from './RecipeItem';

function RecipeList(props) {
  const recipeResult = props.recipeFilters.map((recipe, index) => {
    return (
      <li key={index} className="list__list--recipe">
        <RecipeItem recipe={recipe} />
      </li>
    );
  });
  return (
    <>
      <div className="main">
        <section className="list">
          <h2 className="list__title">List</h2>
          <ul className="list__list">{recipeResult}</ul>
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
