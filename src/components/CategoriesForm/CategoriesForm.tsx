import React, {useEffect, useState} from 'react';
import {ApiCategory} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {createCategory, updateCategory} from '../../store/categoryThunk';
import {useNavigate, useParams} from 'react-router-dom';
import ButtonSpinner from '../Spinner/ButtonSpinner';

const CategoriesForm = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams<{ id: string }>();
  const isLoading = useAppSelector(state => state.category.isLoading);
  const categoryData = useAppSelector(state => state.category.categories);
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ApiCategory>({
    category: '',
    type: '',
  });


  useEffect(() => {
    if (id) {
      const cat = categoryData.find(cat => cat.id === id);
      if (cat) {
        setCategories({
          category: cat.category,
          type: cat.type,
        });
      }
    }
  }, [id, categoryData]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;
    setCategories(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (id) {
        await dispatch(updateCategory({id, categoryData: categories})).unwrap();
      } else {
        await dispatch(createCategory(categories)).unwrap();
      }
      navigate('/categories');
    } catch (error) {
      console.error('Failed to save category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h3>{id ? 'Edit Category' : 'Add Category'}</h3>
        <label htmlFor="type" className="form-label">Type</label>
        <select
          className="form-select"
          name="type"
          value={categories.type}
          onChange={handleChange}
          required
        >
          <option value="">Select one type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          className="form-select"
          name="category"
          value={categories.category}
          onChange={handleChange}
          required
        >
          <option value="">Select of category</option>
          <option value="salary">Salary</option>
          <option value="bonuses">Bonuses</option>
          <option value="commissions">Commissions</option>
          <option value="side-hustles">Side Hustles</option>
          <option value="drinks">Drinks</option>
          <option value="clothes">Clothes</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
        </select>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-outline-success" type="submit" disabled={isLoading}>
          Create
          {isLoading && <ButtonSpinner/>}
        </button>
      </div>
    </form>
  );
};

export default CategoriesForm;