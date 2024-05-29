import { Country } from './country';
import { Region } from './region.type';

export interface cacheStore {
  byCapital: termCountries;
  byCountry: termCountries;
  byRegion: regionCountries;
}

export interface termCountries {
  term: string;
  countries: Country[];
}

export interface regionCountries {
  region: Region;
  countries: Country[];
}
