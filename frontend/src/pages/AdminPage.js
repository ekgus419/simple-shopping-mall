// src/pages/AdminPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function AdminPage() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Typography variant="body1">
                This is the admin page where you can manage products and other settings.
            </Typography>
        </Container>
    );
}

export default AdminPage;
