import '../styles/reset.scss';
import '../styles/App.scss';
import FilterName from './FilterName';
import Filters from './Filters';
import RecipeList from './RecipeList';
const App = () => {
  return (
    <>
      <main>
        <FilterName />
        <Filters />
        <RecipeList />
      </main>
    </>
  );
};

export default App;
