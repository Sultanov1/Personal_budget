import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../types';
import {createCategory, deleteCategory, fetchCategory, updateCategory} from './categoryThunk';

export interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  error: boolean
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createCategory.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });

    builder
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

    builder
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateCategory.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

    builder
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCategory.rejected,  (state) => {
        state.isLoading = false;
        state.error = true;
      })
  },
});

export const categoryReducer = categorySlice.reducer;