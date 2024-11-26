import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import ProductDetailsPage from './pages/product-details';
import ItemsPage from './pages/items-page';
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/items' element={<ItemsPage />} />
        <Route path='/items/:productId' element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App