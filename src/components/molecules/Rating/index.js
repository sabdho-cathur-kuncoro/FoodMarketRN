import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcStarOff, IcStarOn } from '../../../assets';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for(let i=1; i<=5; i++){
      if(i <= number) {
        star.push(<IcStarOn/>);
      } else {
        star.push(<IcStarOff/>);
      }
    }

    return star;
  }
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        {renderStar()}
      </View>
      <Text>{number}</Text>
    </View>
  );
}

export default Rating

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4
  },
});