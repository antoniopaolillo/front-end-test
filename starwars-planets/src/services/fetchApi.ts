function fetchApi(setInitialData: any, setRequest: any) {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((data) => data.json())
    .then((response) => {
      setInitialData(response.results);
      setRequest({ loading: false, error: false });
    })
    .catch((err) => {
      console.log(err);
      setRequest({ loading: false, error: true });
    });
}

export default fetchApi;
