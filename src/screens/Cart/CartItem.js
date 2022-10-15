import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function pressHandler(itemObj){
    var user = await AsyncStorage.getItem('user');
    var parsedUser = JSON.parse(user);
    var data = parsedUser.cart;

    var index = -1;
    var count = 0;
    for(var item of data){
        if(item._id == itemObj._id){
            index = count;
            break;
        }
        count = count + 1;
    }
    if (index > -1) {
        data.splice(index, 1);
    }
    parsedUser.cart = data;
    await AsyncStorage.setItem('user', JSON.stringify(parsedUser));
    itemObj.navigation.navigate('Home', {fromCart: true});
    // itemObj.getdata();
}

class BasketItem extends Component {
    render() {
        return (
            <View style={styles.cartitemcontainer}>
                <View style={styles.imagecontainer}>
                    <Image
                        source={this.props.product.imageLink}
                        style={styles.image} />
                </View>
                <View style={styles.itemdetails}>
                    <View style={styles.namecontainer}>
                        <Text style={styles.itemname}>{this.props.product.name} x {this.props.qty}</Text>
                    </View>
                    <View style={styles.pricecontainer}>
                        <Text style={styles.price}>
                            Rs.{this.props.totalPrice}
                        </Text>
                        <View style={styles.delete}>
                            <TouchableOpacity>
                                <MaterialIcons onPress={() => pressHandler(this.props)} name='delete' Text="delete" size={40} color='#545' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

export default BasketItem;
