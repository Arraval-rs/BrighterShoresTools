import { collection, doc } from "firebase/firestore"

export default defineNuxtPlugin((nuxtApp) => {
  const db = useFirestore();
  const userData = doc(db, "users/" + nuxtApp.currentUser)
  const userProfessions = collection(db, "users/" + nuxtApp.currentUser + "/characters")

  return {
    provide: {
      db,
      userData,
      userProfessions
    },
  };
});