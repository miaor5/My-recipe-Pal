function FilterCategorie(props, ev) {
  const renderCategory = (ev) => {
    return props.getCategory.map((category, index) => {
      return (
        <option key={index} value={category}>
          {category}
        </option>
      );
    });
  };

  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleCategory(ev.target.value);
  };

  return (
    <div className="main__filterCategorie">
      <label className="main__filterCategorie--label">Type of food:</label>
      <select onChange={handleChange}>
        <option value="0">Categories</option>
      </select>
    </div>
  );
}

export default FilterCategorie;
