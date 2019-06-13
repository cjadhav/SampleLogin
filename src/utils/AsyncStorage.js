import AsyncStorage from "@react-native-community/async-storage";

let Async = {};

// Async Storage for String value
Async.saveString = async (key, value) => {
  // await AsyncStorage.setItem(key, "");
  await AsyncStorage.setItem(key, value);
};
Async.getString = async (key, callback) => {
  const strValue = await AsyncStorage.getItem(key);
  callback && callback(strValue);
  return strValue;
};
Async.deleteString = async key => {
  await AsyncStorage.removeItem(key);
};

module.exports = Async;
