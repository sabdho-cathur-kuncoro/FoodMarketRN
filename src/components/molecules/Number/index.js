import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NumberFormat from 'react-number-format'

const Number = ({number, type}) => {
    if(type === 'decimal') {
        return <NumberFormat
          value={number}
          displayType="text"
          decimalSeparator="."
          decimalScale={1}
          fixedDecimalScale
          renderText={value => <Text>{value}</Text>}
        />;
    }
  return (
    <NumberFormat 
        value={number} 
        thousandSeparator="."
        displayType="text"
        decimalSeparator=","
        prefix="IDR "
        renderText={(value)=> <Text>{value}</Text>} 
    />
  )
}

export default Number

const styles = StyleSheet.create({})