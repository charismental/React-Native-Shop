import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();
    return <FlatList data={products} renderItem={itemData => {
        const product = itemData.item;
        const { id, title, price, imageUrl } = product;
        return <ProductItem
            title={title}
            price={price}
            image={imageUrl}
            onViewDetail={() => {
                props.navigation.navigate('ProductDetail', { productId: id, productTitle: title })
            }}
            onAddToCart={() => {
                dispatch(cartActions.addToCart(product))
            }}
            />
    }} />
};

ProductOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Cart'
                        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        onPress={() => navData.navigation.navigate('Cart')}
                    />
                </HeaderButtons>
            )
        }
    }
}

export default ProductOverviewScreen;