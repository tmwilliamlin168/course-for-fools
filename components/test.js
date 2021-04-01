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
                    onClick={() => testAction('/api/teststart?')}
                >
                    Start Test
                </button>
            </>
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
                        {problems.map((pr, id) => {
                            return (
                                <div key={id}>
                                    {pr(testAction)}
                                    {testData?.problems && testData.problems[id]?.ac && 'Accepted'}
                                    {testData?.problems && testData.problems[id]?.wa && 'WA'}
                                </div>
                            )
                        })}
                    </div>
                    <div className="h-16 shadow inset-x-0 text-center">
                        <button>
                            Back
                        </button>
                        Problem {curProb+1}
                        <button>
                            Next
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <>
                No time left
                <br />
                Final score: {score}
            </>
        )
    }
};