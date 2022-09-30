import '../styles/reset.scss';
import '../styles/App.scss';
import FilterName from './FilterName';
import Filters from './Filters';
import RecipeList from './RecipeList';
import React, { useState, useEffect } from 'react';
import getDataApi from '../services/Api';
const App = () => {
  //Contantes de estado
  const [data, setData] = useState('');

  const handleFilterName = (value) => {
    setData(value);
  };

  //Llamando a la Api
  useEffect(() => {
    if (data.length === 0) {
      getDataApi().then((dataClean) => {
        setData(dataClean);
      });
    }
  }, []);

  return (
    <>
      <main>
        <FilterName />
        <Filters />
        <RecipeList />
      </main>
    </>
  );
};

export default App;
