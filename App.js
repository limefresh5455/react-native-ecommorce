import React, { useState } from 'react';
import AppContainer from './src/navigations/AppNavigation';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';
import { CartProvider } from './src/CartContext.js';
// const getFonts = () => Font.loadAsync({
//   'comic-regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
//   'comic-bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
//   'lilita-regular': require('./assets/fonts/LilitaOne-Regular.ttf')
// });

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (fontsLoaded) {
    return (
      <CartProvider>
        <AppContainer />
      </CartProvider>
    );
  // } else {
  //   return (
  //     <AppLoading
  //       startAsync={getFonts}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   )
  // }
};


