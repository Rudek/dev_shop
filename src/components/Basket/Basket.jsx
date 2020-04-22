import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {DialogActions} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import BasketProduct from "./BasketProduct/BasketProduct";
import useStyles from "./styles";

function Basket({open, onClose, basket, handleDeleteProduct, setProductCount}) {
    const classes = useStyles();

    const baskIsEmpty = !basket.length;
    const total = basket.reduce((total, product) => total + (product.count * product.price), 0);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle className={classes.dialogTitle}>
                Basket
            </DialogTitle>
            <DialogContent>
                {baskIsEmpty && (
                    <Grid container justify="center">
                        <Typography variant="body1">
                            Empty basket....
                        </Typography>
                    </Grid>
                )}
                {!baskIsEmpty && (
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="body1">Title</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1">Price</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1">Count</Typography>
                        </Grid>
                        <Grid item xs={2}/>
                        {basket.map(product => <BasketProduct product={product} handleDeleteProduct={handleDeleteProduct} setProductCount={setProductCount}/>)}
                    </Grid>
                )}
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Grid container>
                    <Grid item container xs={4} spacing={1}>
                        <Grid item xs={6}>
                            <Button variant="contained" onClick={onClose}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                color="primary"
                                to={'/checkout' }
                            >
                                Checkout
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container justify="center">
                            <Typography variant="h5">
                                {`Total: $${total}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
}

export default Basket;