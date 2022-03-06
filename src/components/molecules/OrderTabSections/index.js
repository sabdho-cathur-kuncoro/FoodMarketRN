import {StyleSheet, Text, View, useWindowDimensions, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react'
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getInProgress, getPastOrders } from '../../../redux/action';

const inProgress = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {inProgress} = useSelector((state)=> state.orderReducer);

  useEffect(()=> {
    dispatch(getInProgress());
  },[])

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
        {inProgress.map((order)=> {
          return (
            <ItemListFood
              key={order.id}
              rating={order.food.rate}
              image={{uri: order.food.picturePath}}
              onPress={() => navigation.navigate('OrderDetail')}
              type="in-progress"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
            />
          );
        })}
    </ScrollView>
  );
};

const pastOrder = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {pastOrder} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      {pastOrder.map((order)=> {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail')}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: inProgress,
  2: pastOrder,
});

const OrderTabSections = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: '1', title: 'In Progress'},
      {key: '2', title: 'Past Orders'},
    ]);

  return (
      <View style={styles.tabContainer}>
        <TabView
          tabStyle={{width: layout.width}}
          scrollEnabled={true}
          renderTabBar={props => (
            <TabBar
              {...props}
              scrollEnabled={true}
              indicatorStyle={{
                backgroundColor: '#020202',
                height: 3,
                width: '18%',
                marginLeft: '8%'
              }}
              style={{backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1}}
              tabStyle={{width: 'auto'}}
              renderLabel={({route, focused, color}) => (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Medium',
                    color: focused ? '#020202' : '#8D92A3',
                    margin: 8,
                  }}>
                  {route.title}
                </Text>
              )}
            />
          )}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width, height: layout.height}}
          style={{backgroundColor: 'white'}}
        />
      </View>
  );
}

export default OrderTabSections

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});