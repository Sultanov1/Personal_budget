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

export interface ApiTransaction {
  category: string;
  amount: number;
  createdAt: string;
  type: 'income' | 'expense';
}

export interface Transaction extends ApiTransaction {
  id: string;
}

export interface Transactions {
  [id: string]: ApiTransaction;
}