import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchCategory} from '../../store/categoryThunk';

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.category.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between" style={{margin: '0px 5px 15px 0'}}>
        <h3>Categories</h3>
        <Link to="/categories/form" className="btn btn-outline-primary">Add Category</Link>
      </div>
      {categories.length > 0 ? (
        categories.map(category => (
          <div key={category.id} className="card mb-3" style={{maxWidth: '100%'}}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center" style={{padding: '30px 15px'}}>
                <h5>{category.category}</h5>
              </div>
              <div className="d-flex align-items-center p-2">
                <span className="me-4">{category.type}</span>
                <button className="btn btn-primary me-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className='text-danger'>Category is not available!</h5>
      )}
    </div>
  );
};

export default CategoriesPage;