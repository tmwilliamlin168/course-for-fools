import {useEffect, useState} from 'react';

import useFirebase from '../utils/useFirebase';

export default function Register() {
    const firebase = useFirebase();

    const [user, setUser] = useState();
    const [lastTokenRet, ] = useState({time: new Date().getTime()});

    const getIdToken = async () => {
        const curTime=new Date().getTime();
        lastTokenRet.time = curTime;
        const token = await user.getIdToken(true)
        return token;
    };

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
        const handle = setInterval(() => {
          const user = firebase.auth().currentUser;
          if (user && new Date().getTime()-lastTokenRet.time > 5*60*1000) getIdToken();
        }, 6 * 60 * 1000);
        
        return () => clearInterval(handle);
    }, [firebase]);

    useEffect(() => {
        if(!user) return;
        (async () => {
            fetch(`/api/teststatus?token=${await getIdToken()}`)
        })();
    }, [user]);

    return (
        <>
            <h1>Test</h1>
            <p>Loading</p>
        </>
    )
}