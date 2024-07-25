import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Typography, Box, CircularProgress, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

function ProductListPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>Product List</Typography>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">{product.name}</Typography>
                                <Typography color="textSecondary">{product.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={`/products/${product.id}`} size="small" color="primary">View</Button>
                                <Button size="small" color="secondary" onClick={() => handleDelete(product.id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductListPage;
