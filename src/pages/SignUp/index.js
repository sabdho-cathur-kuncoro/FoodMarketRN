import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInputComponent } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onBack={()=> {}} title="Sign Up" subTitle="Register and eat" />
      <View style={styles.container}>
          <View style={styles.photo}>              
            <View style={styles.borderPhoto}>
                <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                </View>
            </View>
          </View>
          <TextInputComponent label='Full Name' placeholder='Type your fullname' />
          <Gap height={16} />
          <TextInputComponent label='Email Address' placeholder='Type your email address' />
          <Gap height={16} />
          <TextInputComponent label='Password' placeholder='Type your password' />
          <Gap height={24} />
          <Button text='Continue' color='#FFC700' onPress={()=> navigation.navigate("SignUpAddress")} />
      </View>
    </View>
  )
}

export default SignUp

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
    photo: {
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 24
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    }
})