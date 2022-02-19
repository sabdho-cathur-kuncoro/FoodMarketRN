import {StyleSheet, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSections} from '../../components';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <HomeProfile />
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.foodCardContainer}>
                <Gap width={24} />
                <FoodCard image={FoodDummy1} />
                <FoodCard image={FoodDummy2} />
                <FoodCard image={FoodDummy3} />
                <FoodCard image={FoodDummy4} />
              </View>
            </ScrollView>
          </View>
          <HomeTabSections />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24
  }
});
