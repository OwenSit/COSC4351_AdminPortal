/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
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
// import {accessibilityProps} from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

const LoginScreen = (props) => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  sendCred = () => {
    fetch('http://10.0.2.2:3000/signup')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
          Welcome to The Admin Portal
        </Text>
        <Text>{'     '}</Text>
        <Text style={{fontSize: 25, textAlign: 'center'}}>
          {'Please Login:'}
        </Text>
        <TextInput
          label="Username:"
          mode="outlined"
          onChangeText={(text) => setName(text)}
          value={username}
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
          value={password}
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'green'}}}
          onChangeText={(text) => setPassword(text)}
        />
        <Text>{'     '}</Text>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => sendCred()}>
          Login
        </Button>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
