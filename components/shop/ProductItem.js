import React from 'react';
import { Platform, View, Text, Image, StyleSheet, Button, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';


const ProductItem = props => {
    const TouchableComponent = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComponent useForeground onPress={props.onViewDetail}>
                    <View>
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
                </TouchableComponent>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    touchable: {
        borderRadius: 10,
        overflow: 'hidden',
    },
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
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2,
    },
    price: {
        fontFamily: 'open-sans',
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
