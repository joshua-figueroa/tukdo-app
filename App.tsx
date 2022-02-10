import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home/Home';
import About from './app/screens/About/About';
import Lesson from './app/screens/Lesson/Lesson';
import SplashScreen from 'react-native-splash-screen';
import { Platform, useColorScheme } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { store } from './app/redux/store';
import { getAllProgress } from './app/redux/reducers/progress';

const App = () => {
  const scheme = useColorScheme();
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProgress())

    if (Platform.OS === "android")
      SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson" component={Lesson} options={({ route }: any) => ({ title: route.params?.topic })} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UnwrappedApp: React.FC<{}> = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default UnwrappedApp;
