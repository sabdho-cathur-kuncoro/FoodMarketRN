import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'

const SplashScreen = ({navigation}) => {
  useEffect(()=> {
    setTimeout(()=> {
      navigation.replace("SignIn");
    }, 2000)
  },[]);
  
  return (
    <View style={{
      backgroundColor: "#FFC700",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <StatusBar hidden={true} />
      <Logo />
      <Text style={{
        color: "#020202",
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
        marginTop: 30
      }}>
        FoodMarket
      </Text>
    </View>
  )
}

export default SplashScreen