import { Link } from 'react-router-dom';

function RecipeItem(props) {
  return (
    <Link to={`/recipe/${props.recipe.id}`} className="recipe">
      <img src={props.recipe.image} alt="" className="recipe_image" />
      <h4 className="recipe_title">{props.recipe.recipeName}</h4>
    </Link>
  );
}
export default RecipeItem;
