import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap, ProfileTabSections } from '../../components';
import { getData } from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(()=> {
    getData('userProfile').then((res)=> {
      setUserProfile(res);
    })
  },[])
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={{uri: userProfile.profile_photo_url}} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.nama}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <Gap height={24} />
      <View style={styles.content}>
        <ProfileTabSections />
      </View>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileDetail: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 24
  },
  nama: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  photo: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  content: {flex: 1},
});