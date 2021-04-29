import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react"; 
import { render } from 'react-dom';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';
//import {loginScreen} from '..../App.js'

export function Loginform() {
  
   let [formFields, setFormFields] = useState([
      {
         label: "Username",
         placeholder:"U$er_example1",
         regEx:/[a-z\D\d]+/,
         valid: false,
         value: "",
         loggedIn: false,
         errorMsg:"Can include any special character,number, or character.",
      },
      {
         label: "Password",
         placeholder:"",
         regEx:/[a-z\D\d]+/,
         valid: false,
         value: "",
         loggedIn: false,
         errorMsg:"Please retry your password",
      },
   ])
   
   let textChange = (value, formField) => {
      console.log(value)
      setFormFields((prevValue) => {
         let newArray = [...prevValue]
         let obj = newArray.find((ff) => ff.label == formField.label)
        obj.value = value
         obj.valid = formField.regEx.test(value)
         return newArray
   })
  }

  let formValid = true
  for(var elem of formFields){
    formValid = formValid && elem.valid
  }

  let submitForm = () =>{
    console.log(
        formFields.map((field)=>{
          return{
              label: field.label,
              value: field.value,
            }
          }))
    }
 
   return (
      <View style={styles.body}>
            {formFields.map((formField)=>(
               <>
               <Text>{formField.label}</Text>
               <TextInput
               keyboardType = {formField.numeric ? "numeric" : undefined}
               style={styles.container} placeholder={formField.placeholder} 
               onChangeText={(value) => textChange(value, formField)}
               value={formField.value}  secureTextEntry={true}
               ></TextInput>
            {!formField.valid ? (<Text style={styles.error}>{formField.errorMsg}</Text>) : undefined}
               </>
            ))}
            <Button onPress={navigation.navigate('Manga')} color="black" title="Submit"></Button>
      </View>
      );
}

            

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    width:"700px",
    height:"30px",
  },
  view:{
    marginVertical:"30px",
  },
  error:{
    color:"red",
  },
});

export default Loginform;
