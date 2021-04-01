import {useEffect, useState} from 'react';

import useFirebase from '../utils/useFirebase';

export default function Register() {
    const firebase = useFirebase();

    const [user, setUser] = useState();

    useEffect(() => {
        if(!firebase) return;
        return firebase.auth().onIdTokenChanged(async (user) => {
          if (!user) {
            setUser(null);
          } else {
            const token = await user.getIdToken();
            setUser(user);
            console.log('final token', token);
          }
        });
    }, [firebase]);

    useEffect(() => {
        const handle = setInterval(async () => {
          const user = firebase.auth().currentUser;
          if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);
        
        return () => clearInterval(handle);
    }, []);

    return "hi";
}