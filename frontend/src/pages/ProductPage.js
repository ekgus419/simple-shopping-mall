import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => {
                setError('Error loading product');
                console.error(error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`/api/products/${id}`)
            .then(() => {
                alert('Product deleted successfully');
                navigate('/products');
            })
            .catch(error => {
                setError('Error deleting product');
                console.error(error);
            });
    };

    if (!product) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">${product.price}</Typography>
            <Typography variant="body2">{product.imageUrl}</Typography>
            <Button component={Link} to={`/products/edit/${product.id}`} variant="contained" color="primary">
                Edit Product
            </Button>
            <Button onClick={handleDelete} variant="contained" color="secondary">
                Delete Product
            </Button>
            {error && <Typography color="error">{error}</Typography>}
        </Container>
    );
}

export default ProductPage;
