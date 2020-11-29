import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const LoadingScreen = (props) => {
  return (
    <>
      <ActivityIndicator size="large" color="blue" />
    </>
  );
};

export default LoadingScreen;
