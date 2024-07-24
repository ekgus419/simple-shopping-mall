// src/pages/ProductDetailsPage.js
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!product) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">${product.price}</Typography>
            <Typography variant="body2">{product.imageUrl}</Typography>
        </Container>
    );
}

export default ProductDetailsPage;
