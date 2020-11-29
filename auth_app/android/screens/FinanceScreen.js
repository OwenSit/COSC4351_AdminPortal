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
// import {accessibilityProps} fro m 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

const FinanceScreen = (props) => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            textAlign: 'center',
          }}>
          Welcome, Finance Admin
        </Text>
        <Text>{'     '}</Text>
        <Text style={{fontSize: 25, textAlign: 'center'}}>
          {'Available Links:'}
        </Text>
        <Text>{'     '}</Text>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => console.log('Link to Finance Reports')}>
          Finance Reports
        </Button>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => console.log('Link to Accounts Payable')}>
          Accounts Payable
        </Button>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => console.log('Link to Accounts Receivable')}>
          Accounts Receivable
        </Button>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => console.log('Link to Tax')}>
          Tax
        </Button>
      </KeyboardAvoidingView>
    </>
  );
};

export default FinanceScreen;
