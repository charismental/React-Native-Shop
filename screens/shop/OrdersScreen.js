import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return <FlatList
        data={orders}
        renderItem={itemData => {
            const { totalAmount, readableDate, items } = itemData.item;
            return <OrderItem items={items} amount={totalAmount} date={readableDate} />
        }}
    />
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu'
                        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                        onPress={() => navData.navigation.toggleDrawer()}
                    />
                </HeaderButtons>
            )
        },
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

export default OrdersScreen;