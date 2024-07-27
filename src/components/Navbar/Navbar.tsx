import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary p-2">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">Finance Tracker</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link active' to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/transaction-form">Add Transaction</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;