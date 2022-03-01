import Axios from "axios";
import { setLoading } from "./global";
import { showMessage } from "../../utils";

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api'
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(res => {
      console.log('Data Success: ', res.data);

      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(resUpload => {
            console.log('success upload: ', resUpload);
          })
          .catch(err => {
            showMessage('Upload photo tidak berhasil');
          });
      }

      dispatch(setLoading(false));
      showMessage('Register Success', 'success');
      navigation.replace('SuccessSignUp');
    })
    .catch(err => {
      console.log('Signup Error: ', err.response.data.message);
      dispatch({type: 'SET_LOADING', value: false});
      showMessage(err?.response?.data?.message);
    });
};