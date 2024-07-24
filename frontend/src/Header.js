import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function Header() {
    const { user } = useContext(AuthContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Simple Shopping Mall
                </Typography>
                {user && user.role === 'ADMIN' && (
                    <>
                        <Button color="inherit" component={Link} to="/products/add">
                            Add Product
                        </Button>
                        <Button color="inherit" component={Link} to="/admin">
                            Admin Page
                        </Button>
                    </>
                )}
                {user && (
                    <Button color="inherit" component={Link} to="/logout">
                        Logout
                    </Button>
                )}
                {!user && (
                    <Button color="inherit" component={Link} to="/register">
                        User Register
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
