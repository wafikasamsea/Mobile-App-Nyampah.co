import axios from 'axios';
import {API_URL} from '../utils/constant';
import {getToken} from '../storage';
export const getProfile = async () => {
  try {
    const token = await getToken();
    const response = await axios.get(API_URL + 'user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateProfile = async ({nama, nohp, alamat}) => {
  try {
    const token = await getToken();
    const response = await axios.patch(
      API_URL + 'user',
      {
        nama: nama,
        nohp: nohp,
        alamat: alamat,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
