import React, { useState } from "react";
import styles from "./style";
import logo from '../../../assets/logo.jpg';
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen(props) {
  const onOtpPress = () => {
    if (email != "") {
      fetch('http://restapi.adequateshop.com/api/authaccount/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email": email,
            "password": password
          })
        })
        .then(res => res.json())
        .then(async function (res) {
          if (res != undefined) {
            alert("Login successfully");
            AsyncStorage.setItem('user', JSON.stringify(res));
            var user = await AsyncStorage.getItem('user');
            var parsed = JSON.parse(user);
            props.navigation.navigate('Home')
          }
        })
        .catch(function (error) {
          alert("Something went wrong");
        });
    } else {
      alert('Invalid Credancial')
    }
  }
  const onSubmitPartner = () => {
    console.log("submit form");
  }
  const [email, onChangeEmail] = useState('')
  const [password, onChangePass] = useState('')
  const [loginbtn, setloginbtn] = useState('Login');
  // const [otp, setOtp] = useState(['1', '2', '3', '4']);
  // const [otpVal, setOtpVal] = useState('');

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style={styles.head}>
              <Text style={styles.title}>Ecommerce App</Text>
              {/*<ImageBackground source={logo} style={styles.header} >
              </ImageBackground>*/}
            </View>
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              value={email}
              onChangeText={text => onChangeEmail(text)}
            />
            <TextInput
              maxLength={8}
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput1}
              value={password}
              onChangeText={text => onChangePass(text)}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={onOtpPress}
              title={loginbtn}
            />
            <Button
              buttonStyle={styles.submitPartnerButton}
              title="Login as Partner"
              onPress={() => props.navigation.navigate('OrderDetails')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}