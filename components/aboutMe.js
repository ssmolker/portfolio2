import React, { Component } from 'react';
import {Button, View, Image, StyleSheet, Text} from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginBottom:50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tinyLogo: {
    width: 326,
    height: 489,
    marginHorizontal:50
  },
  text:{
      marginHorizontal:50,
      fontSize:35
  }
});

class AboutMe extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        //me
        style={styles.tinyLogo}
        source={{uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/45421899_656158358119062_4313687894507126784_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Ka7pBQIUNg0AX_yUtGp&_nc_ht=scontent-atl3-1.xx&oh=9d5f994cd445214527b208fa2d201ad3&oe=60AFA4E3'}}
      />
        <Text style={styles.text}>Hi my names Sasha, and I choose to do a project like this because I enjoy 
        watching anime, and reading manga. I tend to use a lot of databases to find new 
        things to watch and see what is currently airing. Along with this I use them to 
        find new series to read. I wanted </Text>
      </View>
    );
  }
}

export default AboutMe;