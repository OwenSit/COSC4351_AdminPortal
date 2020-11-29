
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

const AdminScreen = () => {
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
      </KeyboardAvoidingView>
    </>
  );
};