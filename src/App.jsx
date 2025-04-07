import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import NavigationMenu from './components/NavigationMenu';
import TopMenu from './components/TopMenu';
function App() {
  return (
    <Router>
      <div className="w100">
      <TopMenu />
      <div className="d-flex">
        <NavigationMenu />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/" element={<OrdersPage />} />{' '}
            {/* По умолчанию открываем Orders */}
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
