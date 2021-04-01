import {useEffect, useState} from 'react';

import useFirebase from '../utils/useFirebase';

export default function Register() {
    const firebase = useFirebase();

    const [user, setUser] = useState();
    const [lastTokenRet, ] = useState({time: new Date().getTime()});

    const getIdToken = async (x) => {
        const curTime=new Date().getTime();
        lastTokenRet.time = curTime;
        const token = await (x || user).getIdToken(true)
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
          if (user && new Date().getTime()-lastTokenRet.time > 5*60*1000) getIdToken(user);
        }, 6 * 60 * 1000);
        
        return () => clearInterval(handle);
    }, [firebase]);

    const [testData, setTestData] = useState(null);

    useEffect(() => {
        if(!user) return;
        (async () => {
            const res = await fetch(`/api/teststatus?token=${await getIdToken()}`)
            if(res.ok) {
                const data = await res.json();
                setTestData(data);
            }
        })();
    }, [user]);

    return (
        <>
            <h1>Test</h1>
            <p>
                {
                    !testData?
                        'Loading'
                    :
                        JSON.stringify(testData)
                }
            </p>
        </>
    )
}