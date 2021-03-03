import {  PlanetInterface } from './interfaces';

export function filterByName(data: PlanetInterface[], nameFilter: string): PlanetInterface[] {
  if (nameFilter) {
    return data.filter((planet: PlanetInterface) => planet.name.includes(nameFilter));
  }
  return data;
}
