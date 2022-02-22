import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react'
import { Button, Gap, Header, TextInputComponent } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage, useForm } from '../../utils'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });
    const [photo, setPhoto] = useState('');

    const dispatch = useDispatch();

    const onSubmit = ()=> {
        console.log('Form: ', form);
        dispatch({type: 'SET_REGISTER', value: form});
        navigation.navigate('SignUpAddress');
    }

    const addPhoto = ()=> {
      launchImageLibrary({
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200
      }, (response)=> {
        console.log('Response ', response);

        if(response.didCancel || response.error) {
          showMessage("Anda tidak memilih photo");
        } else {
          const source = {uri: response.assets[0].uri};
          console.log("Source: ",source);
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName
          }
          setPhoto(source);
        }
      });
    };
  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header onBack={() => {}} title="Sign Up" subTitle="Register and eat" />
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
            <View style={styles.photo}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
          <TextInputComponent
            label="Full Name"
            placeholder="Type your fullname"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" color="#FFC700" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    }
})