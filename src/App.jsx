import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import NavigationMenu from './components/NavigationMenu';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* TopMenu на всю ширину экрана */}
        <div className="container">
          <TopMenu />
        </div>
        {/* Контейнер с максимальной шириной 1440px */}
        <div className="container">
          <div className="main-content">
            <NavigationMenu />
            <div className="page-content full-width">
              <Routes>
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/groups" element={<div>Groups Page</div>} />
                <Route path="/users" element={<div>Users Page</div>} />
                <Route path="/settings" element={<div>Settings Page</div>} />
                <Route path="/" element={<OrdersPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
