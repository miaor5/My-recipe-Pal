import '../styles/reset.scss';
import '../styles/App.scss';
import FilterName from './FilterName';
import FilterCategorie from './FilterCategories';
import FilterCountry from './FilterCountry';
const App = () => {
  return (
    <>
      <main>
        <FilterName />
        <FilterCategorie />
        <FilterCountry />
        <div className="list">
          <h2 className="list__title">List</h2>
          <ul className="list__list">
            <li className="list__list--recipe">
              <img src="" alt="" />
              <h3>Alitas a la barbacoa</h3>
            </li>
            <li className="list__list--recipe">
              <img src="" alt="" />
              <h3>Pizza a la Carbonara</h3>
            </li>
          </ul>
        </div>

        <nav>
          <button>search a recipe</button>
          <button>Random recipe</button>
        </nav>
      </main>
    </>
  );
};

export default App;
