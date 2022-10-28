import '../styles/reset.scss';
import '../styles/App.scss';
import FilterName from './FilterName';
import Filters from './Filters';
import RecipeList from './RecipeList';
import React, { useState, useEffect } from 'react';
import getDataApi from '../services/Api';
import FilterCategories from './FilterCategories';
const App = () => {
  //Contantes de estado
  const [data, setData] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');
  const [filterCategory, setFilterCategory] = useState('Category');

  //Aqui estan los Handles

  const handleFilterName = (value) => {
    console.log('here handleFilterName');
    setSearchRecipe(value);
  };
  const handleCategory = (value) => {
    setFilterCategory(value);
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

  //Crea la lista de opciones para las categorias y para que ninguna se repita. Con la primera constante cojo todos las categorias con un map. Con la segunda constante hago un filtro de las categorias.

  const getCategory = () => {
    const recipeCategory = data.map((recipe) => recipe.category);
    const uniqueCategory = recipeCategory.filter((category, index) => {
      return recipeCategory.indexOf(category) === index;
    });
    return uniqueCategory;
  };

  //Filters for the recipes

  const recipeFilters = data

    .filter((recipe) => {
      if (filterCategory === 'category') {
        return true;
      } else {
        return recipe.category === filterCategory;
      }
    })

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
        <FilterCategories
          handleCategory={handleCategory}
          getCategory={getCategory}
        />
        <Filters />
        <RecipeList recipeFilters={recipeFilters} />
      </main>
    </>
  );
};

export default App;
