import { getAuth } from "firebase/auth";

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";

export default defineNuxtPlugin((nuxtApp) => {
  const auth = getAuth(nuxtApp.$firebaseApp)
  const ui = new firebaseui.auth.AuthUI(auth);
  const uiConfig = {
                    callbacks: {
                      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                        return false
                      }
                    },
                    signInFlow: "popup",
                    signInOptions: [
                      {
                        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        requireDisplayName: false
                      }
                    ]
                  }
  var currentUser = ref(null)
  auth.onAuthStateChanged((user) => {
    if(user) {
      currentUser.value = user
      console.log(currentUser)
    }
    else {
      console.log("No user signed in")
    }
  })
  return {
    provide: {
      ui,
      uiConfig,
      currentUser
    },
  };
});