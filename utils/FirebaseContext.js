import { createContext, useEffect, useState } from "react"

const FirebaseContext = createContext(null)
var firebaseConfig = {
apiKey: "AIzaSyDVKCSa2EKe_bKVOgnuSsgZNfxCxaUdVuA",
authDomain: "courseff-c2e4b.firebaseapp.com",
projectId: "courseff-c2e4b",
storageBucket: "courseff-c2e4b.appspot.com",
messagingSenderId: "808451204548",
appId: "1:808451204548:web:5758c8bade3dbbf686f091",
measurementId: "G-H3QTRF66H3"
};

export const FirebaseProvider = ({children}) => {
  const [firebase, setFirebase] = useState(null)

  useEffect(() => {
    if (!firebase) {
      const app = import("firebase/app")
      const auth = import("firebase/auth")
      const analytics1 = import("firebase/analytics")

      Promise.all([app, auth]).then(values => {
        const firebaseInstance = values[0].default
        firebaseInstance.initializeApp(firebaseConfig)
        setFirebase(firebaseInstance)
        const analytics2 = firebaseInstance.analytics();
      })
    }
  }, [])

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext