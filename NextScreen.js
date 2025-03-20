import React, { useState } from "react";
import {View, Text, TextInput,Pressable} from 'react-native'
import { signOut } from "firebase/auth";
import { auth,db } from "./firebase";
import { styles } from "./Login";
import { useAuth } from "./AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { useCollection} from 'react-firebase-hooks/firestore'

export default function NextScreen({navigation}){
    const { userID } = useAuth()
    const [note, setNote] = useState('')
    const [values, loading, error] = useCollection(
        collection(db, 'users', userID, 'notes')
    )
    const notes = values?.docs.map((doc) => ({...doc.data(), id:doc.id})) || []

    function handleLogout(){
        signOut(auth).
        then(()=> navigation.navigate('Login')).
        catch(error => console.log(error))
    }

    async function handleNewNote(){
        if(note.trim()){
            await addDoc(collection(db, 'users', userID, 'notes'),{
                text:note
            })
            setNote('')
        }
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
            <Text>User ID: {userID}</Text>
            <Text style={{marginTop:20}}>Add new note:</Text>
            <TextInput
                placeholder="add note"
                value={note}
                onChangeText={setNote}
            />
            <Pressable 
                style={styles.buttons}
                onPress={handleNewNote}
            >
                <Text>Save</Text>
            </Pressable>
            { notes.map((n)=> (
                <Text key={n.id}>{n.text}</Text>
                ))
            }
        </View> 
    )
}

