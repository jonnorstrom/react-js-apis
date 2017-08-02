import {GET_USERS} from '../types';
import axios from 'axios';

export function getUsers(users = []) {
  return function(dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch({
        type: GET_USERS,
        users: response.data
      })
    })
  }
}
