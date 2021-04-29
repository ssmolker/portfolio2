import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:50,
    marginHorizontal:150
  },
});

class MTitles extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>Steel Ball Run</Text>
            <Text>Demon Slayer</Text>
            <Text>Haikyuu!!</Text>
            <Text>Wotakoi</Text>
        </View>
    );
  }
}

export default MTitles;