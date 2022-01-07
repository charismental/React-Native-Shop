import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      "interpolate() was renamed to interpolateNode() in Reanimated 2. Please use interpolateNode() instead",
    ]);
  }, []);
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={()=> setFontLoaded(true)} onError={(error)=> console.warn(error)} />
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

