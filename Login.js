import React,{use, useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
export default function Login({navigation}){
    const [email, setEmail] = useState('b@mail.dk')
    const [password, setPassword] = useState('123456')

    function handleSignUp(){
        console.log("sign up...")
        createUserWithEmailAndPassword(auth, email, password).
        then(()=>{ navigation.navigate('NextScreen')}).
        catch(error => console.log(error));
    }
    return (
        <View>
            <Text>Login på vej...</Text>
            <TextInput 
                placeholder="email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable 
                style={styles.buttons}
                onPress={handleSignUp}
            >
                <Text>Sign Up</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons:{
        padding:15,
        backgroundColor:"#88c",
        marginTop:10
    }
})