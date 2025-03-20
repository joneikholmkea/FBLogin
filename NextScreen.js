import React from "react";
import {View, Text, Pressable} from 'react-native'
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { styles } from "./Login";

export default function NextScreen({navigation}){

    function handleLogout(){
        signOut(auth).
        then(()=> navigation.navigate('Login')).
        catch(error => console.log(error))
    }

    return(
        <View>
            <Text>Great work! 🚀 Every tap, every bug, every fix—you’re building real apps. Keep pushing, keep learning, and make something amazing. The next screen isn’t just in your app—it’s in your journey. Let’s go! 💡💻</Text>
            <Pressable 
                style={styles.buttons}
                onPress={handleLogout}
            >
                <Text>Log out</Text>
            </Pressable>
        </View> 
    )
}

