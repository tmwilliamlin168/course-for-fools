import React, { useEffect, useState } from "react";

import problems from './problems';

export default function Test({ testData, testAction }) {
    const [timeLeft, setTimeLeft] = useState();
    const [curProb, setCurProb] = useState(0);

    useEffect(() => {
        if(testData.stage === 1) {
            setTimeLeft(Math.max(Math.floor(30*60-(new Date().getTime()-testData.startTime)/1000), 0));
            const interval=setInterval(() => setTimeLeft(t => t-1), 1000);
            return () => clearInterval(interval);
        }
    }, [testData.stage]);

    if(testData.stage === 0) {
        return (
            <div className="h-screen flex flex-col">
                <p>
                To pre-register for this course, some very basic math and logic skills will be required. An assessment will be given to determine if you are eligible for the beta version of this course, as well as help you identify any skills that should be improved (if any).
                </p>
                <ol>
                <li>You have 30 minutes to complete this assessment.</li>
                <li>You will need a score of 60% or above to pass.</li>
                <li>You will need to submit the solution to each problem separately.</li>
                </ol>
                <button
                    onClick={() => testAction('/api/teststart?')}
                >
                    Start Test
                </button>
            </div>
        )
    }

    let score=0;
    problems.forEach((pr, id) => {
        if(testData?.problems && testData.problems[id]?.ac)
            ++score;
    });

    if(testData.stage === 1) {
        if(timeLeft > 0) {
            return (
                <div className="h-screen flex flex-col">
                    <div className="h-16 shadow inset-x-0 text-center">
                        <div className="float-right">
                            {(''+Math.floor(timeLeft/60)).padStart(2, '0')+':'+(''+timeLeft%60).padStart(2, '0')}
                        </div>
                        Score: {score}/{problems.length}
                    </div>
                    <div className="flex-1 overflow-y-scroll">
                        {/*problems.map((pr, id) => {
                            return (
                                <div key={id}>
                                    {pr(testAction)}
                                    {testData?.problems && testData.problems[id]?.ac && 'Accepted'}
                                    {testData?.problems && testData.problems[id]?.wa && 'WA'}
                                </div>
                            )
                        })*/}
                        {React.createElement(problems[curProb], {testAction})}
                        {testData?.problems && testData.problems[curProb]?.ac && 'Accepted'}
                        {testData?.problems && testData.problems[curProb]?.wa && 'WA'}
                    </div>
                    <div className="h-16 shadow inset-x-0 text-center">
                        <button
                            disabled={curProb<=0}
                            onClick={() => setCurProb(curProb-1)}
                        >
                            Back
                        </button>
                        Problem {curProb+1}
                        <button
                            disabled={curProb+1>=problems.length}
                            onClick={() => setCurProb(curProb+1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <div className="h-screen flex flex-col">
                <p>Time's up!</p>
                <p>Final score: {score}</p>
                <p>Thank you for taking bla bla we'll be in touch something something.</p>
            </div>
        )
    }
};