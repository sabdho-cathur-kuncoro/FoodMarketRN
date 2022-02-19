import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderDetail = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Order Details"
          subTitle="You deserve better meal"
          onBack={() => {}}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={FoodDummy1}
            type="order-summary"
            name="Soup Bumil"
            price="200.000"
            items={14}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.839.000" />
          <ItemValue
            label="Total Price"
            valueColor="#1ABC9C"
            value="IDR 390.803.000"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value="Sabdho C Kuncoro" />
          <ItemValue label="Phone No." value="0896 5346 3568" />
          <ItemValue label="Address" value="Setra Duta Palima" />
          <ItemValue label="House No." value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
        </View>
        <View style={styles.button}>
          <Button
            text="Cancel My Order"
            onPress={() => navigation.replace('SuccessOrder')}
            color="#D9435E"
            textColor='white'
          />
        </View>
        <Gap height={40} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderDetail

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});