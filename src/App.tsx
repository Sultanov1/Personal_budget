import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import CategoriesPage from './containers/CategoriesPage/CategoriesPage';
import MainPage from './containers/MainPage/MainPage';
import CategoriesForm from './components/CategoriesForm/CategoriesForm';

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='p-3'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path='/categories/form' element={<CategoriesForm/>}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;