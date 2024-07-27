export interface ApiCategory {
  category: string;
  type: string;
}

export interface Categories {
  [id: string]: ApiCategory;
}

export interface Category extends ApiCategory {
  id: string;
}