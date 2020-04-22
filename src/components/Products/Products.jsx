import React, {useContext} from 'react';
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import useDataApi from "../../utils/hooks/useDataApi";
import Product from "./Product"

function Products({categoryId,categoryTitle}) {
    const { rawData, isLoading } = useDataApi({ url: '/products' });
    const products = Array.isArray(rawData) ?
        rawData.filter(({cat_id}) => cat_id === categoryId) :
        [];

    return isLoading ? <CircularProgress /> :
        !!products.length ? products.map(product => <Product key={product.id} product={product}/>) :
        <Typography component="h3" variant="body1">{`Products of category "${categoryTitle}" are missing`}</Typography>;
}

export default Products;