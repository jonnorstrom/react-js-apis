import { GET_USERS } from '../types';
import axios from 'axios';

const getUsers = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
  console.log('in action creator!')
  return {
    type: GET_USERS,
    payload: request
  }
}

export default getUsers;
