import React, {useContext} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/core/SvgIcon/SvgIcon";
import Card from "@material-ui/core/Card";

import BasketContext from "../../context/basketContext";
import {useStyles} from "./styles";

function Product({product}) {
    const classes = useStyles();
    const {basket, setBasket} = useContext(BasketContext);

    const onBuyClick = () => {
        const desiredProduct = basket.find((p, index, arr) => p.id === product.id && arr[index].count++ );
        if (!desiredProduct) {
            product.count = 1;
            basket.push(product);
        }
        setBasket([...basket]);
    };

    return (
        <Card className={classes.root} key={product.id}>
            <CardContent>
                <Typography className={classes.title} variant="h3">
                    {product.title}
                </Typography>
                <Button
                    variant="contained"
                    endIcon={<AddShoppingCart/>}
                    onClick={onBuyClick}
                >
                    Buy
                </Button>&nbsp;
                <strong>
                    {product.price}
                </strong>
            </CardContent>
        </Card>
    )
}

export default Product;