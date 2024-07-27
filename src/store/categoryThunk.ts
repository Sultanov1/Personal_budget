import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {ApiCategory, Categories, Category} from '../types';
import {RootState} from '../app/store';

export const createCategory = createAsyncThunk<ApiCategory, ApiCategory, {
  state: RootState }>('category/create', async (categories) => {
  const {data: category} = await axiosApi.post<ApiCategory>('/categories.json', categories);
  return category;
});

export const fetchCategory = createAsyncThunk<Category[], void, { state: RootState }>(
    'category/fetch', async () => {
      const { data: category } = await axiosApi.get<Categories>('/categories.json');

      if (category === null) {
        return [];
      }

      return Object.keys(category).map(id => ({
        id,
        ...category[id],
      }));
    }
);

export const updateCategory = createAsyncThunk<Category, { id: string, categoryData: ApiCategory }, { state: RootState }>(
    'categories/update', async ({ id, categoryData }) => {
        await axiosApi.put(`/categories/${id}.json`, categoryData);
        return { ...categoryData, id };
    }
);

export const deleteCategory = createAsyncThunk<void, string, {state: RootState}>('categories/delete', async (id: string) => {
    const {data: category} = await axiosApi.delete(`/categories/${id}.json`);
    return category;
})