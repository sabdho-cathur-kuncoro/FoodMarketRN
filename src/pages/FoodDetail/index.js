import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy6, IcBackWhite } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Counter, Rating } from '../../components'

const FoodDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground source={FoodDummy6} style={styles.cover}>
        <TouchableOpacity activeOpacity={0.7} style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={()=> navigation.navigate("OrderSummary")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22
    },
    back: {
        backgroundColor: 'rgba(0,0,0, 0.4)',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 26,
        paddingHorizontal: 16
    },
    mainContent: {
        flex: 1
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    priceContainer: {
        flex: 1
    },
    button: {
        width: 163
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    priceTotal: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
})