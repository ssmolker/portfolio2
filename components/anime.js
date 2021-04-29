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

class DisplayAnime extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        //MHA
          style={styles.tinyLogo}
          source={{uri: 'https://data.whicdn.com/images/353649027/original.jpg?t=1614804839'}}
        />
        <Image
        //Fruits basket
          style={styles.tinyLogo}
          source={{uri: 'https://i.pinimg.com/originals/d4/50/08/d450085fec90217eb00936953b17eaab.jpg'}}
        />
        <Image
        //DS
          style={styles.tinyLogo}
          source={{uri: 'https://static.metacritic.com/images/products/movies/2/b38c5bd251d1ed7ff1bb354ff4d0c69d.jpg'}}
        />
        <Image
        //jjba
          style={styles.tinyLogo}
          source={{uri: 'https://i2.wp.com/anitrendz.net/news/wp-content/uploads/2021/04/JoJos-Bizzare-Adventure-Stone-Ocean-KV-2.jpg?resize=696%2C984&ssl=1'}}
        />
      </View>
    );
  }
}

export default DisplayAnime;