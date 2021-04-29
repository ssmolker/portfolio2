import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet,} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tinyLogo: {
    width: 326,
    height: 489,
    
  },
});

class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        //sbr
          style={styles.tinyLogo}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91gAXaFOojL.jpg'}}
        />
        <Image
        //DS
          style={styles.tinyLogo}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ZNkhqRvVL.jpg'}}
        />
        <Image
        //HQ
          style={styles.tinyLogo}
          source={{uri: 'https://dw9to29mmj727.cloudfront.net/products/1974720985.jpg'}}
        />
        <Image
        //wotkoi
          style={styles.tinyLogo}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81mSq3tWczL.jpg'}}
        />
      </View>
    );
  }
}

export default DisplayAnImage;