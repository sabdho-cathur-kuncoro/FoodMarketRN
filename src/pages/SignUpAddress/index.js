import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Select, TextInputComponent } from '../../components'

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onBack={()=> {}} title="Address" subTitle="Make sure it's valid" />
      <View style={styles.container}>
          <TextInputComponent label='Phone No.' placeholder='Type your phone number' />
          <Gap height={16} />
          <TextInputComponent label='Address' placeholder='Type your address' />
          <Gap height={16} />
          <TextInputComponent label='House No.' placeholder='Type your house number' />
          <Gap height={16} />
          <Select label="City" />
          <Gap height={24} />
          <Button text='Continue' color='#FFC700' onPress={()=> navigation.replace("SuccessSignUp")} />
      </View>
    </View>
  )
}

export default SignUpAddress

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
    },
})