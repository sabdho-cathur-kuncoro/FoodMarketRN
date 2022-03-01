import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Select, TextInputComponent } from '../../components'
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import { setLoading, signUpAction  } from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung'
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state)=> state);

  const onSubmit = ()=> {
    const data = {
      ...form,
      ...registerReducer
    }
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          onBack={() => navigation.goBack()}
          title="Address"
          subTitle="Make sure it's valid"
        />
        <View style={styles.container}>
          <TextInputComponent
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInputComponent
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Continue" color="#FFC700" onPress={onSubmit} />
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