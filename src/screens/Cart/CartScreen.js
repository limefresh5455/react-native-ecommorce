import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import CartItem from "./CartItem";
import { CartContext } from '../../CartContext';
import styles from './styles'

export default function CartScreen({navigation}) {

  const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  
  let [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(getTotalPrice());
  });

  function renderItem({item}) {
    return (
      <CartItem
        navigation={navigation}
        {...item}
      />
    )
  }
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EFF0F1"
      }}
    >
      <View style={styles.items}>
        <SafeAreaView >
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: wp("5%")
        }}
      >
        <View style={styles.totalcontainer}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>Rs.{total}</Text>
        </View>
        <View style={styles.checkoutcontainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (total > 0) {
                navigation.navigate("Checkout", { data: items })
              }
              else {
                alert("Your cart is empty");
              }
            }}
            style={styles.checkoutbtn}
          >
            <View
              style={{
                marginRight: 15
              }}
            >
              <Icon name="md-cart" size={20} color="white" />
            </View>
            <Text
              style={styles.checkout}
            >
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
