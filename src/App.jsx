import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ArtisanDashboard from './pages/ArtisanDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import ExplorePage from './pages/ExplorePage'
import AboutPage from './pages/AboutPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ArtisanProfilePage from './pages/ArtisanProfilePage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import MessagesPage from './pages/MessagesPage'
import CollectionPage from './pages/CollectionPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<ArtisanDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/messages/:id" element={<MessagesPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
      </Routes>
    </Router>
  )
}

export default App
