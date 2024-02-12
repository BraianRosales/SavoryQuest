export interface SearchItem {
  value: number;
  description: string;
}

export interface AreasResponse {
  meals: AreaName[];
}

export interface AreaName {
  strArea: string;
}

export interface SearchBy {
  type: string;
  value: string | number;
}
