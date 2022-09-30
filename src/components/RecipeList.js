function RecipeList() {
  return (
    <>
      <div className="main">
        <section className="list">
          <h2 className="list__title">List</h2>
          <ul className="list__list">
            <li className="list__list--recipe">
              <img src="" alt="" />
              <h4>Alitas a la barbacoa</h4>
            </li>
            <li className="list__list--recipe">
              <img src="" alt="" />
              <h4>Pizza a la Carbonara</h4>
            </li>
          </ul>
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
