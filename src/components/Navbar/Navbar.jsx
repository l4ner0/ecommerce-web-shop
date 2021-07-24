import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { PATH } from '../../constants';

import logo from '../../assets/commerce.png';
import useSyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useSyles();
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to={PATH.HOME} variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    {
                        location.pathname === '/' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to={PATH.CART} arial-label="Show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
