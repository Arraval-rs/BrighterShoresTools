import { collection, doc } from "firebase/firestore"

export default defineNuxtPlugin((nuxtApp) => {
  const db = useFirestore();
  const user = "test-user"
  const userData = doc(db, "users/" + user)
  const userProfessions = collection(db, "users/" + user + "/characters")

  return {
    provide: {
      db,
      user,
      userData,
      userProfessions
    },
  };
});