export interface Props {
  children: React.ReactNode;
}

export interface ContextTableInterface {
  filters: {
    filterByName: {
      name: string;
    };
    filterByNumericValues: Array<{
      column: string;
      comparison: string;
      value: string;
    }>;
  };
  initialData: PlanetInterface[] | null;
  filteredData: PlanetInterface[] | null;
  request: { loading: boolean; error: boolean };
  setFilters: any;
}

export interface PlanetInterface {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}