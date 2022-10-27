function FilterCategorie(props, ev) {
  const renderCategory = (ev) => {
    return props.getYear.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };

  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };

  return (
    <div className="main__filterCategorie">
      <label className="main__filterCategorie--label">Type of food:</label>
      <select>
        <option value="0">Categories</option>
      </select>
    </div>
  );
}

export default FilterCategorie;
