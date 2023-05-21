import axios from 'axios';
import {API_URL} from '../utils/constant';
import {setToken} from '../storage';
export const register = async ({nama, password, email, nohp, alamat}) => {
    console.log(nama, password, email, nohp, alamat)
  try {
    const response = await axios.post(API_URL + 'register', {
      nama: nama,
      password: password,
      email: email,
      nohp: nohp,
      alamat: alamat,
    });
    if (response.status === 200) {
      setToken(response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error.response.data);
    return false;
  }
};
