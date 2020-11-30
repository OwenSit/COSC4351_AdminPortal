import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';

// const links = [];
var link;
let array = [];
fetch('http://10.0.2.2:3000/showLinks', {
  method: 'POST',
  headers: {
    'content-Type': 'application/json',
  },
  body: JSON.stringify({
    role: 'Technology',
  }),
})
  .then((res) => res.json())
  .then((data) => {
    // let array = [];
    console.log(data);
    for (link of data) {
      console.log(link.linkname);
      array.push(link.linkname);
      console.log(array);
    }
  });
console.log(array);

export default class FinanceScreen extends Component {
  constructor() {
    super();
    this.Array_Items = array;
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          {this.Array_Items.map((item, key) => (
            <View key={key} style={styles.item}>
              <Text
                style={styles.item_text_style}
                onPress={() => {
                  Alert.alert(item.toString());
                }}>
                {item}
              </Text>

              <View style={styles.item_separator} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  item_text_style: {
    fontSize: 20,
    color: '#000',
    padding: 10,
  },

  item_separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#263238',
  },
});
