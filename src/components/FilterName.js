function FilterName(props) {
  const handleSearch = (ev) => {
    ev.preventDefault();
    console.log('here');
    props.handleFilterName(ev.target.value);
  };
  return (
    <div className="head">
      <h1 className="head__title">My recipe Pal</h1>
      <div className="head__filterName">
        <label className="head__filterName--label">
          Buscar:
          <input
            type="search"
            name="search"
            placeholder="Ejem: Paella"
            className="inputTexto"
            onChange={handleSearch}
            value={props.searchRecipe}
          />
        </label>
      </div>
    </div>
  );
}
export default FilterName;
