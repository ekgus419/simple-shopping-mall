// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import AdminPage from './pages/AdminPage';
import UserRegisterPage from './pages/UserRegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './Header';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductListPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/products/details/:id" element={<ProductDetailsPage />} />
                    <Route path="/products/add" element={<AddProductPage />} />
                    <Route path="/products/edit/:id" element={<EditProductPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/register" element={<UserRegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
