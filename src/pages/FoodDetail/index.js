import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react'
import { IcBackWhite } from '../../assets'
import { Button, Counter, Number, Rating } from '../../components'
import {getData} from '../../utils'

const FoodDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, ingredients, rate, price} = route.params;
  const [ totalItem, setTotalItem ] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  const onCounterChange = (value) => {
    setTotalItem(value);
  }

  useEffect(()=> {
    getData('userProfile').then((res)=> {
      setUserProfile(res);
    })
  }, [])

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = 10/100 * totalPrice;
    const total = totalPrice + tax + driver;

    const data = {
      item: {
        id,
        name,
        price,
        picturePath
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total
      },
      userProfile
    }

    navigation.navigate('OrderSummary', data);
  }
  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number style={styles.priceTotal} number={totalItem * price} />
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              onPress={onOrder}
            />
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