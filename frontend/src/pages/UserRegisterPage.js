import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegisterPage() {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 기능을 가져옵니다.

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/user-register', user);
            navigate('/products');
        } catch (error) {
            setError('회원가입 실패');
            console.error('회원가입 에러:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                회원가입
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
                {error && <Typography color="error">{error}</Typography>}
            </form>
        </Container>
    );
}

export default UserRegisterPage;
