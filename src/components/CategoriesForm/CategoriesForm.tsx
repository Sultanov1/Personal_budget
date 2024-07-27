import React, {useState} from 'react';
import {ApiCategory} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {createCategory} from '../../store/categoryThunk';
import {useNavigate} from 'react-router-dom';
import ButtonSpinner from '../Spinner/ButtonSpinner';

const CategoriesForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.category.isLoading);
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ApiCategory>({
    category: '',
    type: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;
    setCategories(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createCategory(categories));
    navigate('/categories');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">Type</label>
        <select
          className="form-select"
          name="type"
          value={categories.type}
          onChange={handleChange}
          required
        >
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
          Button
          {isLoading && <ButtonSpinner/>}
        </button>
      </div>
    </form>
  );
};

export default CategoriesForm;