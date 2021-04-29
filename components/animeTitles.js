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

class ATitles extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>My Hero Academia</Text>
            <Text>Fruits Basket</Text>
            <Text>Demon Slayer</Text>
            <Text>JoJo's Bizzare Adventure</Text>
        </View>
    );
  }
}

export default ATitles;