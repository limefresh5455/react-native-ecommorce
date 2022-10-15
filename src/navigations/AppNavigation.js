import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import ItemDetailsScreen from '../screens/ItemDetails/ItemDetailsScreen';
import ItemsListScreen from '../screens/ItemsList/ItemsListScreen';
import CartScreen from '../screens/Cart/CartScreen';
import AboutScreen from '../screens/About/AboutScreen';
import ContactScreen from '../screens/Contact/ContactScreen';
import LoginScreen from '../screens/login/login';
import OrderDetails from '../screens/OrderDetails/OrderDetailsScreen'
import SearchScreen from '../screens/Search/SearchScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSideBar from './CustomSideBar';
import { CartIcon } from '../screens/Cart/CartIcon.js';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
export default function AppContainer() {
    const dimensions = useWindowDimensions();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            drawerStyle: {
              width: 240,
            },
            drawerType: dimensions.width >= 768 ? 'permanent' : 'front'
          }}
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <CustomSideBar {...props} />}>
          <Drawer.Screen name='Home' component={HomeScreen} 
          options={({ navigation }) => ({
            title: 'Home',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Drawer.Screen name='Search' component={SearchScreen} 
          options={({ navigation }) => ({
            title: 'Search',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='Cart' component={CartScreen} 
          options={({ navigation }) => ({
            title: 'Cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='About' component={AboutScreen} 
          options={({ navigation }) => ({
            title: 'About',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='Contact' component={ContactScreen} 
          options={({ navigation }) => ({
            title: 'Contact',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='Login' component={LoginScreen} 
          options={({ navigation }) => ({
            title: 'Login',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='Checkout' component={CheckoutScreen} 
          options={({ navigation }) => ({
            title: 'Checkout',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='ItemDetails' component={ItemDetailsScreen} 
          options={({ navigation }) => ({
            title: 'ItemDetails',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='ItemsList' component={ItemsListScreen} 
          options={({ navigation }) => ({
            title: 'ItemsList',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Drawer.Screen name='OrderDetails' component={OrderDetails} 
          options={({ navigation }) => ({
            title: 'Order Details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});