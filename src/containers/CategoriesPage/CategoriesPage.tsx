import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {deleteCategory, fetchCategory} from '../../store/categoryThunk';
import Spinner from '../../components/Spinner/Spinner';
import './Page.css';

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.category.isLoading);
  const navigate = useNavigate();
  const categories = useAppSelector(state => state.category.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleEdit = (id: string) => {
    navigate(`/categories/form/${id}`);
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await dispatch(deleteCategory(id)).unwrap();
      } catch (error) {
        console.error('Failed to delete category:', error);
      }
    }
    dispatch(fetchCategory());
  };

  const colorExpand = (type: string) => {
      return type === 'income' ? 'text-income' : 'text-expense';
  }


  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between" style={{margin: '0px 5px 15px 0'}}>
        <h3>Categories</h3>
        <Link to="/categories/form" className="btn btn-outline-primary">Add Category</Link>
      </div>
      {isLoading && <Spinner/>}
      {categories.length > 0 ? (
        categories.map(category => (
          <div key={category.id} className="card mb-3" style={{maxWidth: '100%'}}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center" style={{padding: '30px 15px'}}>
                <h5>{category.category}</h5>
              </div>
              <div className="d-flex align-items-center p-2">
                <span className={`me-4 ${colorExpand(category.type)}`}>{category.type}</span>
                <button onClick={() => handleEdit(category.id)} className="btn btn-primary me-3">Edit</button>
                <button onClick={() => handleDelete(category.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className='text-danger mt-2'>Category is not available!</h5>
      )}
    </div>
  );
};

export default CategoriesPage;