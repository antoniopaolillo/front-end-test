import { InterfaceNumericFilters, PlanetInterface } from './interfaces';

function filterByName(
  data: PlanetInterface[],
  nameFilter: string
): PlanetInterface[] {
  return data.filter((planet: PlanetInterface) =>
    planet.name.includes(nameFilter)
  );
}

function filterByValues(data: any, filter: InterfaceNumericFilters) {
  const { column, comparison, value } = filter;
  switch (comparison) {
    case 'maior que':
      return data.filter(
        (planet: any) =>
          planet[column] > Number(value) && planet[column] !== 'unknown'
      );
    case 'menor que':
      return data.filter(
        (planet: any) =>
          planet[column] < Number(value) && planet[column] !== 'unknown'
      );
    case 'igual':
      return data.filter(
        (planet: any) =>
          planet[column] === value && planet[column] !== 'unknown'
      );
    default:
      return data;
  }
}

export default function finalData(
  data: PlanetInterface[],
  filtersActive: InterfaceNumericFilters[],
  nameFilter: string
): PlanetInterface[] {
  let filteredData = data;
  if (filtersActive.length > 0) {
    filteredData = filtersActive.reduce((acc, filter, index) => {
      const array = index === 0 ? data : acc;
      return filterByValues(array, filter);
    }, []);
  }
  filteredData = filterByName(filteredData, nameFilter);
  return filteredData;
}
