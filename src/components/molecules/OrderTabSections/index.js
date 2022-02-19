import {StyleSheet, Text, View, useWindowDimensions, ScrollView} from 'react-native';
import React, { useState } from 'react'
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';

const inProgress = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={4}
        price="2.000.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={4}
        price="2.000.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={4}
        price="2.000.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={4}
        price="2.000.000"
        name="Soup Bumil"
      />
    </ScrollView>
  );
};

const pastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={4}
        price="2.000.000"
        name="Soup Bumil"
        date="11-Feb-2022, 12:38"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={4}
        price="2.000.000"
        name="Soup Bumil"
        date="12-Feb-2022, 14:00"
        status="Cancel"
      />
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