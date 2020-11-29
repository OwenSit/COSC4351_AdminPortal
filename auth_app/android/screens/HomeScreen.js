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
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text
          style={{
            fontSize: 25,
            marginLeft: 18,
            marginTop: 10,
            textAlign: 'center',
          }}>
          Welcome to The Admin Portal,
        </Text>
        <Text>{'     '}</Text>
        <Text
          style={{
            fontSize: 25,
            marginLeft: 18,
            marginTop: 10,
            textAlign: 'center',
          }}>
          {'Your Name: \n'}
          {'Your Role:'}
        </Text>
        <TextInput
          label="Username:"
          mode="outlined"
          style={{
            marginLeft: 18,
            marginRight: 18,
            marginTop: 18,
          }}
          theme={{colors: {primary: 'red'}}}
        />
        <TextInput
          label="Password:"
          mode="outlined"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'red'}}}
        />
        <Text>{'     '}</Text>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </KeyboardAvoidingView>
    </>
  );
};

export default HomeScreen;
