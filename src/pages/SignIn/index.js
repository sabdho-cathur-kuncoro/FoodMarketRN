import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Button,
    Gap,
    Header,
    TextInputComponent
} from '../../components'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header title='Sign In' subTitle='Find your best ever meal' />
      <View style={styles.container}>
          <TextInputComponent label='Email Address' placeholder='Type your email address' />
          <Gap height={16} />
          <TextInputComponent label='Password' placeholder='Type your password' />
          <Gap height={24} />
          <Button text='Sign In' color='#FFC700' />
          <Gap height={12} />
          <Button text='Create New Account' color='#8D92A3' textColor='white' onPress={()=> navigation.navigate("SignUp")} />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
    }
})