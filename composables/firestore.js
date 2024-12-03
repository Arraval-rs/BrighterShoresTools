import { collection, doc, setDoc } from "firebase/firestore"

const db = useFirestore();

export function syncronousReadUserData(...segments) {
	const item = (segments.length % 2 !== 0) ? useDocument(doc(db, "users", ...segments)) : useCollection(collection(db, "users", ...segments))
	item.promise.value.then(()=>{
		if(item.value == null) {
     	console.log("Path does not exist: users/", ...segments.join("/"))
     	createNewUserDoc(...segments)
	  }
	})
	return item
}

function createNewUserDoc(...segments) {
	console.log("Creating new entry based on template item: users/template-user/", ...segments.slice(1).join("/"))
	if (segments.length % 2 !== 0) {
		const templateDoc = useDocument(doc(db, "users/template-user", ...segments.slice(1)))
		const newEntryRef = doc(db, "users", ...segments)
		templateDoc.promise.value.then((result) => {
			setDoc(newEntryRef, templateDoc.value)
		})
	} else {
		//TODO: Implement create collection
	}
}