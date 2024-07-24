// src/pages/EditProductPage.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => {
                console.error(error);
                setError('Error loading product');
            });
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/products/${id}`, product)
            .then(response => {
                alert('Product updated successfully');
                navigate(`/products/${id}`);
            })
            .catch(error => {
                setError('Error updating product');
                console.error(error);
            });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Edit Product
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Image URL"
                    name="imageUrl"
                    value={product.imageUrl}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Product
                </Button>
            </form>
        </Container>
    );
}

export default EditProductPage;
