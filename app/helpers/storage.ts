import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

export const storeData = async (key: string, value: Object) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return _.isNull(value) ? 0 : parseInt(JSON.parse(value))!
    } catch (error) {
        console.log(error)
    }
}
