import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';

import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://www.sportsdirect.com/images/marketing/btq-run-mens-run-shoes-500x356.jpg' },
//     { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112210140' }
// ]

const Products = ({ products }) => {

    const classes = useStyles();

    return (

    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>

    )
};

export default Products;