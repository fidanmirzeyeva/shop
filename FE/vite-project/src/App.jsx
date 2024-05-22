import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Admin from './pages/Admin/Admin';
import Basket from './pages/Basket/Basket';
import Detail from './pages/Detail/Detail';
import MainProvider from './context/MainProvider';
import WishList from './pages/WishList/WishList';
function App() {


  return (
    <>
      <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/wish' element={<WishList/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      </MainProvider>
    </>
  )
}

export default App
