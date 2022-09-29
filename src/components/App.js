import '../styles/reset.scss';
import '../styles/App.scss';

const App = () => {
  return (
    <>
      <head className="head">
        <h1 className="head__title">My recipe Pal</h1>
        <div className="head__filterName">
          <label className="head__filterName--label">
            Bucar:
            <input
              type="search"
              name="search"
              placeholder="Ejem: Paella"
              className="inputTexto"
            />
          </label>
        </div>
      </head>

      <main>
        <div className="main__filterCategorie">
          <label className="main__filterCategorie--label">Type of food:</label>
          <select>
            <option value="0">Categories</option>
          </select>
        </div>

        <div className="main__filterCountry">
          <label className="main__filterCountry--label">
            Country of teh food
          </label>
          <select>
            <option value="0">Country</option>
          </select>
        </div>

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
