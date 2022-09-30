function FilterName() {
  return (
    <div className="head">
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
    </div>
  );
}
export default FilterName;
