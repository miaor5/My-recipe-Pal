import FilterCategorie from './FilterCategories';
import FilterCountry from './FilterCountry';

function Filters() {
  return (
    <>
      <div className="filters">
        <FilterCategorie />
        <FilterCountry />
      </div>
    </>
  );
}

export default Filters;
