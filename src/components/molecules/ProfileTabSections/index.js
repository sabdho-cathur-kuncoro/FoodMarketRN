import {StyleSheet, Text, View, useWindowDimensions, ScrollView} from 'react-native';
import React, { useState } from 'react'
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import ItemListMenu from '../ItemListMenu';

const Account = () => {

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListMenu text="Edit Profile" />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
    </ScrollView>
  );
};

const foodMarket = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8,
        paddingHorizontal: 24,
      }}>
      <ItemListMenu text="Rate App" />
      <ItemListMenu text="Help Center" />
      <ItemListMenu text="Privacy & Policy" />
      <ItemListMenu text="Terms & Conditions" />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: foodMarket,
});

const ProfileTabSections = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: '1', title: 'Account'},
      {key: '2', title: 'FoodMarket'},
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

export default ProfileTabSections;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});