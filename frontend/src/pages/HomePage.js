// src/pages/HomePage.js
import React, { useEffect } from 'react'; // useEffect를 임포트해야 합니다

import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to /products when the component mounts
        navigate('/products');
    }, [navigate]);

    return null; // No UI content to display as we are redirecting
};

export default HomePage;
