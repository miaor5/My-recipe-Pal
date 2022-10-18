import FilterCategorie from './FilterCategories';
import FilterCountry from './FilterCountry';
import FilterName from './FilterName';

function Filters() {
  return (
    <>
      <div className="filters">
        <FilterName />
        <FilterCategorie />
        <FilterCountry />
      </div>
    </>
  );
}

export default Filters;
