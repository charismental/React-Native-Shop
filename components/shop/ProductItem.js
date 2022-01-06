import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { HiddenItem } from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';

const ProductItem = props => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text styles={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
                <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        marginTop: 4,
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20,
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10,
    },
    imageContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        width: '100%',
        height: '60%',
    },
});

export default ProductItem;
