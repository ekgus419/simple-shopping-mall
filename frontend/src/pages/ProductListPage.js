// src/pages/ProductListPage.js
import React, { useEffect, useState, useContext } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/products/${id}`)
            .then(() => setProducts(products.filter(product => product.id !== id)))
            .catch(error => console.error('There was an error deleting the product!', error));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Product List
            </Typography>
            {user && user.role === 'ADMIN' && (
                <Button component={Link} to="/products/add" variant="contained" color="primary">
                    Add New Product
                </Button>
            )}
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                                <Typography variant="body1">${product.price}</Typography>
                                <Button component={Link} to={`/products/${product.id}`} variant="contained" color="primary">
                                    View Details
                                </Button>
                                {user && user.role === 'ADMIN' && (
                                    <>
                                        <Button
                                            component={Link}
                                            to={`/products/edit/${product.id}`}
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(product.id)}
                                            variant="contained"
                                            color="error"
                                        >
                                            Delete
                                        </Button>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductListPage;
