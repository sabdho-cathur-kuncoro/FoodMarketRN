import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcMin, IcPlus } from '../../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginHorizontal: 10
    }
})