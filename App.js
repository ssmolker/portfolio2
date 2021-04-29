// In App.js in a new project
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LoginForm from './components/login'
import DisplayAnImage from './components/manga'
import DisplayAnime from './components/anime'
import MTitles from './components/mangaTitles'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign:'center', fontWeight:'bold', fontSize:90 }}>Welcome to Nerdhub</Text>
      <Text style={{ textAlign:'center', fontSize:20, marginTop:50 }}>A project where you can check off manga and anime you have read and watched. As well as add them to a shopping cart.</Text>
      <Text style={{ textAlign:'center', fontSize:20, marginTop:50 }}></Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

function loginScreen({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [Login, setLogin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  return (
    <View style={{padding:50}}>
      {!Login ?
        <>
          <Text style={{ textAlign:'center', fontWeight:'bold', fontSize:90 }}>Login below please</Text>
          <TextInput style={{ marginTop:20, borderColor:"black",borderWidth:2}} placeholder="username" value={username} onChangeText={(un => setUsername(un))}></TextInput>
          <TextInput style={{ marginTop:2, marginBottom:20, borderColor:"black",borderWidth:2}} placeholder="password" value={password} secureTextEntry={true} onChangeText={(pw => setPassword(pw))}></TextInput>
          <Button title="Log in" onPress={() => {setLogin(true); setShowLogin(false) }}></Button>
        </>
        :
        <>
          <Text style={{ textAlign:'center', fontWeight:'bold', fontSize:90 }}>Welcome {username}</Text>
          <Text style={{ textAlign:'center', fontSize:20, marginTop:15, marginBottom:5 }}>Please proceed to the next page to see what Nerdhub has to offer.</Text>
          <Button title="Content page" onPress={() =>{setLogin(); navigation.navigate('Manga')}}></Button>
        </>
      }
      {/* <LoginForm/> */}
    </View>
  );
}

function mangaScreen({ navigation }) {
  return (
    //style={{flexDirection: 'row', justifyContent: 'space-between'}}
    <View>
      <Text style={{ textAlign:'center', fontWeight:'bold', fontSize:90 }}>Manga</Text>
      <Button title="Anime" onPress={() => navigation.navigate('Anime')}></Button>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')}></Button>
      <Button title="Logout" onPress={() => navigation.navigate('Login')}></Button>
      <DisplayAnImage/>
      <MTitles/>
    </View>
  );
}

function animeScreen({ navigation }) {
  return (
    //style={{flexDirection: 'row', justifyContent: 'space-between'}}
    <View>
      <Text style={{ textAlign:'center', fontWeight:'bold', fontSize:90 }}>Anime</Text>
      <Button title="Manga" onPress={() => navigation.navigate('Manga')}></Button>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')}></Button>
      <Button title="Logout" onPress={() => navigation.navigate('Login')}></Button>
      <DisplayAnime/>
    </View>
  );
}

function cartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cart Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Manga" component={mangaScreen} />
        <Stack.Screen name="Anime" component={animeScreen} />
        <Stack.Screen name="Cart" component={cartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;