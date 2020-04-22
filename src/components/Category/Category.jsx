import React, {useState} from "react";
import {withRouter} from "react-router";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import category from "../../types/category";
import Products from "../Products/Products";
import {useStyles} from "./styles";



function Category({categories, match: {params}}) {
    const classes = useStyles();
    const {alias} = params;
    const category = categories.find(({alias: categoryAlias}) => categoryAlias === alias);

    if (!category) {
        return '404';
    }

    return <>
        <Typography className={classes.category} variant="h2">
            {`${category.id} - ${category.title}`}
        </Typography>
        <Grid container>
            <Products categoryId={category.id} categoryTitle={category.title}/>
        </Grid>
    </>;
}

Category.propTypes = {
    categories: PropTypes.arrayOf(category).isRequired,
};

export default withRouter(Category);