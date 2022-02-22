import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Select, TextInputComponent } from '../../components'
import { useForm } from '../../utils'
import { useSelector } from 'react-redux'
import Axios from 'axios'

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung'
  });

  const registerReducer = useSelector((state)=> state.registerReducer);

  const onSubmit = ()=> {
    // console.log("Form: ", form);
    const data = {
      ...form,
      ...registerReducer
    }
    console.log("Data Register: ", data);
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
    .then((res)=> {
      console.log("Data Success: ", res.data);
      navigation.replace('SuccessSignUp');
    })
    .catch((err)=> {
      console.log("Signup Error: ", err);
    })
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          onBack={() => {}}
          title="Address"
          subTitle="Make sure it's valid"
        />
        <View style={styles.container}>
          <TextInputComponent
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button
            text="Continue"
            color="#FFC700"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
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