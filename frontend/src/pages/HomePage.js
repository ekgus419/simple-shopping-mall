import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to /products when the component mounts
        navigate('/products');
    }, [navigate]);

    return null;
};

export default HomePage;
