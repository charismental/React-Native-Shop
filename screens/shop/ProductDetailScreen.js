import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.products.availableProducts.find(p => p.id === productId));
    
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title="Add to Cart" onPress={()=>{ }} />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
};

ProductDetailScreen.navigationOptions = navData => {
    const productTitle = navData.navigation.getParam('productTitle');
    return { headerTitle: productTitle }    
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    },
})

export default ProductDetailScreen;