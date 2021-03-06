import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, { useEffect, useState } from 'react'
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDataByTypes } from '../../../redux/action';

const newTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);

  useEffect(()=> {
    dispatch(getFoodDataByTypes('new_food'));
  },[]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
        {newTaste.map(item => {
          return (
            <ItemListFood
              key={item.id}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail', item)}
              type="product"
              rating={item.rate}
              price={item.price}
              name={item.name}
            />
            )
          })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      {popular.map(item => {
        return (
          <ItemListFood
            key={item.id}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
            type="product"
            rating={item.rate}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      {recommended.map(item => {
        return (
          <ItemListFood
            key={item.id}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
            type="product"
            rating={item.rate}
            price={item.price}
            name={item.name}
          />
        );
      })}
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