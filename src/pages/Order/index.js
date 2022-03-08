import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EmptyOrder, Gap, Header, OrderTabSections } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/action';

const Order = () => {
  const [isEmpty] = useState(false);
  const dispatch = useDispatch();
  const {orders} = useSelector((state)=> state.orderReducer);

  useEffect(()=> {
    dispatch(getOrders());
  },[])

  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
            <Header title="Your Orders" subTitle="Wait for the best meal" />
            <Gap height={24} />
            <View style={styles.tabContainer}>
              <OrderTabSections />
            </View>
        </View>
      )}
    </View>
  );
}

export default Order

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1}
});