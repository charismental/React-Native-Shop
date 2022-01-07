import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';

import CartItem from '../../components/shop/CartItem';
import Colors from '../../constants/Colors';

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = Object.entries(state.cart.items)
        .map(el => {
            const [key, val] = el;
            return { ...val, productId: key};
        });
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });
    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.summaryAmount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button color={Colors.accent} disabled={!cartItems?.length} title="Order Now" onPress={()=> dispatch(orderActions.addOrder(cartItems, cartTotalAmount))} />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => {
                    const { productTitle, sum, quantity, productId } = itemData.item;
                    return <CartItem title={productTitle} amount={sum} quantity={quantity} onRemove={()=> dispatch(cartActions.removeFromCart(productId))} />
                }}
            />
        </View>
    )
};

CartScreen.navigationOptions = {
    headerTitle: 'Your Cart',
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    },
    summaryAmount: {
        color: Colors.primary,
    },
});

export default CartScreen;