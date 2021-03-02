function fetchApi() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export default fetchApi;
