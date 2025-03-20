import React,{useEffect, useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet, Alert} from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useAuth } from "./AuthContext";

export default function Login({navigation}){
    const [email, setEmail] = useState('b@mail.dk')
    const [password, setPassword] = useState('123456')
    const { setUserID } = useAuth()

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                setUserID(user.uid)
                //Alert.alert("bruger id: " + user.uid)
            }
        })
        return unsubscribe // når komponent unmountes, skal vi holde op med at lytte.
    },[navigation, setUserID])

    function handleLogin(){
        console.log("sign up...")
        signInWithEmailAndPassword(auth, email, password).
        then(()=>{ navigation.navigate('NextScreen')}).
        catch(error => Alert.alert(error.message));
    }

    function handleSignUp(){
        console.log("sign up...")
        createUserWithEmailAndPassword(auth, email, password).
        then(()=>{ navigation.navigate('NextScreen')}).
        catch(error => Alert.alert(error.message));
    }
    return (
        <View>
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
            <Pressable 
                style={styles.buttons}
                onPress={handleLogin}
            >
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    buttons:{
        padding:15,
        backgroundColor:"#88c",
        marginTop:10
    }
})