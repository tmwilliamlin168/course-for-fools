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
            <div className="text-center pt-4 text-xl lg:text-3xl w-3/4 mx-auto">
                <p>
                To pre-register for this course, some very basic math and logic skills will be required. An assessment will be given to determine if you are eligible for the beta version of this course, as well as help you identify any skills that should be improved (if any).
                </p>
                <br />
                <ol>
                <li>1. You have 30 minutes to complete this assessment.</li>
                <li>2. You will need a score of 6 or above to pass.</li>
                <li>3. You will need to submit the solution to each problem separately.</li>
                </ol>
                <br />
                <button
                    onClick={() => testAction('/api/teststart?')}
                    className="bg-blue-500 text-base hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
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
        if(timeLeft > 0 && !testData.ended) {
            return (
                <div className="h-screen flex flex-col">
                    <div className="h-16 shadow inset-x-0 text-center text-sm flex flex-col">
                        <div className="relative flex-1 flex text-xl font-bold justify-center">
                            <div className="absolute h-full right-0 inline-flex items-center px-6">
                                {(''+Math.floor(timeLeft/60)).padStart(2, '0')+':'+(''+timeLeft%60).padStart(2, '0')}
                            </div>
                            <div className="inline-flex items-center">
                                Score: {score}/{problems.length}
                            </div>
                        </div>
                        <div className="pt-1 b-0">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                                <div style={{width:`${100*curProb/problems.length}%`, transition:"width 0.3s"}}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-scroll">
                        {curProb < problems.length ?
                            <div>
                                {testData?.problems && testData.problems[curProb]?.ac && <div className="pt-4 text-center text-green-500 text-xl lg:text-3xl font-bold">Correct Answer!</div>}
                                {testData?.problems && testData.problems[curProb]?.wa && <div className="pt-4 text-center text-red-500 text-xl lg:text-3xl font-bold">Wrong Answer!</div>}
                                {React.createElement(problems[curProb], {testAction, problemData: testData?.problems && testData.problems[curProb]})}
                            </div>
                        :
                            <div className="text-center pt-4 text-xl lg:text-3xl w-3/4 mx-auto">
                                This is the last page. Go back to review the problems.
                                <br />
                                <br />
                                <button
                                    onClick={() => testAction('/api/testend?')}
                                    className="bg-blue-500 text-base hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                                >
                                    End Test
                                </button>
                            </div>
                        }
                    </div>
                    <div className="py-4 shadow inset-x-0 text-center font-semibold">
                        <button className="bg-blue-500 my-2 mx-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                            disabled={curProb<=0}
                            onClick={() => setCurProb(curProb-1)}
                        >
                            Back
                        </button>
                        Problem {Math.min(curProb+1, problems.length)}
                        <button className="bg-blue-500 my-2 mx-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                            disabled={curProb>=problems.length}
                            onClick={() => setCurProb(curProb+1)}
                        >
                            Next
                        </button>
                        <div className="text-sm py-4 font-normal">
                            Zero to Hero Pre-Registration Assessment.
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="flex items-center text-center justify-center h-screen  self-auto place-self-center">
            <div className=" ">
              <div className="max-w-lg bg-blue-300 rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-3xl mb-2 text-center">Time's up!</div>
                        <div className="font-bold text-xl text-base">
                            Final score: {score}  
                        </div>
                        <p className="text-gray-700 text-base">
                            Oops... No offense but seems like you lack a bit of practice...
                            <br />
                            Solutions to this pre-registration test will be released soon.
                            <br />
                            Come back again once you have learned the fundamentals!
                            <br />
                            Note: April Fools' is over, please read Our Story
                        </p>
                    </div>
                </div> 
              </div>
            </div>
        )
    }
};