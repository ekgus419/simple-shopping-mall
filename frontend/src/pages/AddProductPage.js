// src/pages/AddProductPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가


function AddProductPage() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: ''
    });

    const navigate = useNavigate(); // useNavigate 초기화

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/products', product)
            .then(() => {
                alert('Product added successfully');
                navigate('/products'); // 등록 후 /products 페이지로 이동
            })
            .catch(error => console.error(error));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Add New Product
            </Typography>
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
                    Add Product
                </Button>
            </form>
        </Container>
    );
}

export default AddProductPage;
