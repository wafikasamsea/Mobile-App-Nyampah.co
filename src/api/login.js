import axios from 'axios';
import {API_URL} from '../utils/constant';
import { setToken } from '../storage';
export const login = async (username, password) => {
  try {
    console.log(API_URL + 'login')
    const response = await axios.post(API_URL + 'login', {
      email: username,
      password: password,
    });
    if (response.status === 200) {
      setToken(response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
