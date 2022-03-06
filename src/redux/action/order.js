import Axios from "axios"
import { API_HOST } from "../../config"
import { getData } from "../../utils"

// 16258070151

// 70012
// 629583041271

export const getOrders = () => (dispatch) => {
    getData('token').then((resToken) => {
        Axios.get(`${API_HOST.url}/transaction`, {
            headers: {
                'Authorization' : resToken.value
            }
        })
        .then((res) => {
            dispatch({type: 'SET_ORDER', value: res.data.data.data});
        })
        .catch((err) => {
            console.log(err);
        })
    })
}
export const getInProgress = () => (dispatch) => {
    getData('token').then((resToken) => {
        Axios.all([
          Axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          Axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          Axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
        ])
          .then(
            Axios.spread((resPending, resOnDelivery, resSuccess) => {
              // console.log('In progress: ', res.data);
              const pending = resPending.data.data.data;
              const onDelivery = resOnDelivery.data.data.data;
              const success = resSuccess.data.data.data;

              dispatch({
                type: 'SET_IN_PROGRESS',
                value: [...pending, ...onDelivery, ...success],
              });
            }),
          )
          .catch((err) => {
            console.log(err);
          });
    })
}
export const getPastOrders = () => (dispatch) => {
    getData('token').then((resToken) => {
        Axios.all([
          Axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          Axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
        ])
          .then(
            Axios.spread((resCancel, resDeliver) => {
              // console.log('In progress: ', res.data);
              const cancel = resCancel.data.data.data;
              const deliver = resDeliver.data.data.data;
              dispatch({type: 'SET_PAST_ORDER', value: [...cancel, ...deliver]});
            }),
          )
          .catch((err) => {
            console.log(err);
          });
    })
}