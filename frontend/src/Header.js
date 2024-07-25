// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // AuthProvider에서 useAuth 가져오기
import './Header.css';
import { FaHome, FaBox, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    const { isAuthenticated, logout } = useAuth(); // useAuth로 인증 상태와 로그아웃 함수 가져오기

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <div className="logo ">
                        <Link to="/">ShoppingMall</Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/products" className="nav-link"><FaBox /> 상품목록</Link></li>
                        {isAuthenticated ? (
                            <>
                                <li><button className="nav-link" onClick={logout}><FaSignOutAlt /> 로그아웃</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="nav-link"><FaSignInAlt /> 로그인</Link></li>
                                <li><Link to="/register" className="nav-link"><FaUserPlus /> 회원가입</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
