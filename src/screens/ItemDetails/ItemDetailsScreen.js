import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
import { CartContext } from '../../CartContext';
export default function RecipeScreen({route}) {
  const { item } = route.params;
  const { addItemToCart } = useContext(CartContext);

  function onAddToCart(items) {
    alert("add item in cart successfully")
    addItemToCart(items);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={item.imageLink}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
            <Button
            onPress={() => onAddToCart(item)}
            title="Add to cart"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});