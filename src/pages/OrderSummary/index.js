import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Header, ItemListFood, ItemValue, Loading } from '../../components'
import Axios from 'axios';
import { getData } from '../../utils';
import { API_HOST } from '../../config';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('http://google.com');

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING'
    }
    getData('token').then((resToken)=> {
      Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('error checkout: ', err);
        });
    })
  }

  const onNavChange = (state) => {
    const titleWeb = 'Laravel';
    if(state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  }

  if(isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView 
          source={{uri: paymentURL}} 
          startInLoadingState={true}
          renderLoading={()=> <Loading />}
          onNavigationStateChange={onNavChange} 
        />
      </>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar translucent={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Order Summary"
          subTitle="You deserve better meal"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={{uri: item.picturePath}}
            type="order-summary"
            name={item.name}
            price={item.price}
            items={transaction.totalItem}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={item.name}
            value={transaction.totalPrice}
            type="currency"
          />
          <ItemValue
            label="Driver"
            value={transaction.driver}
            type="currency"
          />
          <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
          <ItemValue
            label="Total Price"
            valueColor="#1ABC9C"
            value={transaction.total}
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>
        <View style={styles.button}>
          <Button
            text="Checkout Now"
            onPress={onCheckout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderSummary

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8
    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24,
        bottom: 10
    }
})