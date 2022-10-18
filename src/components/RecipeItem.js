import { Link } from 'react-router-dom';

function RecipeItem(props) {
  return (
    <Link to={`/recipe/${props.recipe.id}`} className="no">
      <img src={props.recipe.image} alt="" />
      <h4>{props.recipe.recipeName}</h4>
    </Link>
  );
}
export default RecipeItem;
