import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import { signInWithPopup, GoogleAuthProvider, signInWithCredential } from "firebase/auth";

import {auth, app} from './firebase'

// Complete the session (Fix pop-up issue)
WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
  const [user, setUser] = useState(null);

  // Configure Google login with Expo
  const [request, response, promptAsync] = Google.useAuthRequest({
    scopes: ["profile", "email"],
    responseType: "id_token",  // Ensure id_token is returned
    webClientId: "366920203555-das7em9mv3e135g3ifl8j5sdpkuatmd8.apps.googleusercontent.com", // Get from Firebase Console
  });

  useEffect(() => {
    console.log("Google response:", response); // Debugging log
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          console.error("Login Error:", error);
        });
    }
  }, [response]);

  return (
    <View>
      {user ? (
        <Text>Welcome, {user.displayName}!</Text>
      ) : (
        <Button title="Login with Google" onPress={() => promptAsync()} />
      )}
    </View>
  );
}