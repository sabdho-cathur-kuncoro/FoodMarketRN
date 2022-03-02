import {StyleSheet, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSections} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodData } from '../../redux/action/home';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(()=> {
    dispatch(getFoodData())
  },[]);
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
                {food.map(itemFood => {
                  return (
                    <FoodCard key={itemFood.id} name={itemFood.name} image={{uri: itemFood.picturePath}} rating={itemFood.rate} />
                  )
                })}
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
