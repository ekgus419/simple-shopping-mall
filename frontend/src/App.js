// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import UserRegisterPage from './pages/UserRegisterPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './Header';
import { AuthProvider, useAuth } from './context/AuthContext'; // Ensure useAuth is imported

function App() {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<RequireAuth component={ProductListPage} />} />
                    <Route path="/products/:id" element={<RequireAuth component={ProductPage} />} />
                    <Route path="/products/details/:id" element={<RequireAuth component={ProductDetailsPage} />} />
                    <Route path="/products/add" element={<RequireAuth component={AddProductPage} />} />
                    <Route path="/products/edit/:id" element={<RequireAuth component={EditProductPage} />} />
                    <Route path="/register" element={<UserRegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

const RequireAuth = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <div>Please log in to view products.</div>;
    }

    return <Component />;
};

export default App;
