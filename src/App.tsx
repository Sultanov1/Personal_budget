import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import CategoriesPage from './containers/CategoriesPage/CategoriesPage';
import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionPage from './containers/TransactionPage/TransactionPage';

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='p-3'>
        <Routes>
          <Route path='/' element={<TransactionPage/>}/>
          <Route path='/transaction-form' element={<TransactionForm/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path='/categories/form/:id' element={<CategoriesForm/>}/>
          <Route path='/categories/form' element={<CategoriesForm/>}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;