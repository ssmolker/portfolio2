import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

// const styles = StyleSheet.create({
//   container: {
//     padding: 50,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   tinyLogo: {
//     width: 326,
//     height: 489,
    
//   },
// });

class LoginForm extends Component {
  render() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [Login, setLogin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!Login ?
        <>
          <Text>Login below please</Text>
          <TextInput placeholder="username" value={username} onChangeText={(un => setUsername(un))}></TextInput>
          <TextInput placeholder="password" value={password} secureTextEntry={true} onChangeText={(pw => setPassword(pw))}></TextInput>
          <Button title="Log in" onPress={() => {setLogin(true); setShowLogin(false) }}></Button>
        </>
        :
        <>
          <Text>Welcome {username}</Text>
          <Text>Please proceed to the next page to see what Nerdhub has to offer.</Text>
          <Button title="Content page" onPress={() =>{setLogin(); navigation.navigate('Manga')}}></Button>
        </>
      }
    </View>
    );
  }
}

export default LoginForm;