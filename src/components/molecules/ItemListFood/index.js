import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react'
import Rating from '../Rating';
import Number from '../Number';

const ItemListFood = ({image, onPress, items, rating, price, type, name, date, status }) => {
  const renderContent = ()=> {
    switch (type) {
      // product home page
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        // order summary
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // in-progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items. </Text>
                <Number number={price} style={styles.price} />
              </View>
            </View>
          </>
        );
      case 'past-orders':
        // past order
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items. </Text>
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={5} />
          </>
        );
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
}

export default ItemListFood

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
  status: (status)=> ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});