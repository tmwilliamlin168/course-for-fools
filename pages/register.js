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

    const renderTest = testData => {
        if(testData.stage === 0) {
            return (
                <>
                    To pre-register for this course, some very basic math and logic skills will be required. An assessment will be given to determine if you are eligible for the beta version of this course, as well as help you identify any skills that should be improved (if any).
                    <br />
                    1. You have 30 minutes to complete this assessment.
                    <br />
                    2. You will need a score of 60% or above to pass.
                    <br />
                    3. You will need to submit the solution to each problem separately. 
                    <br />
                    <button
                        onClick={() => {

                        }}
                    >
                        Start Test
                    </button>
                </>
            )
        }
    };

    return (
        <>
            <h1>Test</h1>
            {
                !testData?
                    'Loading'
                :
                    renderTest(testData)
            }
        </>
    )
}