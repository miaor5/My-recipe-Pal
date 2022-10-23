import '../styles/reset.scss';
import '../styles/App.scss';
import FilterName from './FilterName';
import Filters from './Filters';
import RecipeList from './RecipeList';
import React, { useState, useEffect } from 'react';
import getDataApi from '../services/Api';
const App = () => {
  //Contantes de estado
  const [data, setData] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');

  const handleFilterName = (value) => {
    console.log('here handleFilterName');
    setSearchRecipe(value);
  };

  //Llamando a la Api
  useEffect(() => {
    if (searchRecipe !== '') {
      getDataApi(searchRecipe).then((dataClean) => {
        console.log(dataClean);
        setData(dataClean);
      });
    }
  }, [searchRecipe]);

  //Filters for the recipes

  const recipeFilters = data

    // .filter((movie) => {
    //   if (filterYears === 0) {
    //     return true;
    //   } else {
    //     return filterYears === movie.year;
    //   }
    // })

    .filter((recipe) => {
      return recipe.recipeName
        .toLowerCase()
        .includes(searchRecipe.toLowerCase());
    });

  return (
    <>
      <main>
        <FilterName
          handleFilterName={handleFilterName}
          searchRecipe={searchRecipe}
        />
        <Filters />
        <RecipeList recipeFilters={recipeFilters} />
      </main>
    </>
  );
};

export default App;
