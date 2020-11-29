/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './android/screens/LoginScreen';
import HomeScreen from './android/screens/HomeScreen';
import LoadingScreen from './android/screens/LoadingScreen';
import AdminScreen from './android/screens/AdminScreen';
import FinanceScreen from './android/screens/FinanceScreen';
import SalesScreen from './android/screens/SalesScreen';
import HrScreen from './android/screens/HrScreen';
import TechScreen from './android/screens/TechScreen';

const Stack = createStackNavigator();

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="AdminPage" component={AdminScreen} />
        <Stack.Screen name="FinancePage" component={FinanceScreen} />
        <Stack.Screen name="SalesPage" component={SalesScreen} />
        <Stack.Screen name="HrPage" component={HrScreen} />
        <Stack.Screen name="TechPage" component={TechScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
