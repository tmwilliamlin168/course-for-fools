import Head from 'next/head';
import {useEffect, useState} from 'react';

import Test from '../components/test';
import Header from '../components/header';
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

    const testAction = async (url) => {
        const res = await fetch(`${url}token=${await getIdToken()}`)
        if(res.ok) {
            const data = await res.json();
            setTestData(data);
        }
    }

    useEffect(() => {
        if(!user) return;
        testAction('/api/teststatus?');
    }, [user]);

    return (
        <>
            <Head>
                <title>Course | Register</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
            <Header />
            {
                !testData?
                    'Loading'
                :
                    <Test testData={testData} testAction={testAction} />
            }
        </>
    )
}