import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    return <FlatList data={products} renderItem={itemData => {
        const { title, price, imageUrl } = itemData.item;
        return <ProductItem title={title} price={price} image={imageUrl} onViewDetail={()=>{}} onAddToCart={()=>{}} />
    }} />
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products',
}

export default ProductOverviewScreen;