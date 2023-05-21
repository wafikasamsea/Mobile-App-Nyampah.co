/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage'
const setToken = async (value) => {
        await AsyncStorage.setItem("@token", value);
    }

const getToken = async () => {
    const value = await AsyncStorage.getItem("@token");
    return value;
}

export {setToken, getToken}