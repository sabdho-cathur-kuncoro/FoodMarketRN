import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, { useState } from 'react'
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';

const newTaste = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        rating={4}
        price="200.000"
        name="Soup Bumil"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: newTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSections = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: '1', title: 'New Taste'},
      {key: '2', title: 'Popular'},
      {key: '3', title: 'Recommended'},
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
                width: '12%',
                marginLeft: '5%'
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

export default HomeTabSections

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});