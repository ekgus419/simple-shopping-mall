// src/pages/UserRegisterPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegisterPage() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/user-register', user)
            .then(() => {
                alert('User registered successfully');
                navigate('/login'); // Redirect to login page after registration
            })
            .catch(error => console.error('There was an error registering the user!', error));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Container>
    );
}

export default UserRegisterPage;
