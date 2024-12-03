import { getAuth } from "firebase/auth";

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = getAuth(nuxtApp.$firebaseApp)
  const ui = new firebaseui.auth.AuthUI(auth);
  const uiConfig = {
                    callbacks: {
                      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                        return true
                      }
                    },
                    signInFlow: "popup",
                    signInSuccessUrl: "/",
                    signInOptions: [
                      {
                        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        requireDisplayName: false
                      }
                    ]
                  }
  var currentUser = ref(await getCurrentUser())
  auth.onAuthStateChanged((user) => {
    if(user) {
      currentUser.value = user
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