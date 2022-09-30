const getApiData = () => {
  return fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((recipe, index) => {
        return {
          //   poster: movie.poster,
          //   movieName: movie.movie,
          //   fullSentence: movie.full_line,
          //   year: movie.year,
          //   director: movie.director,
          //   audio: movie.audio,
          //   id: index.toString(),
        };
      });
      return dataClean;
    });
};
export default getApiData;
