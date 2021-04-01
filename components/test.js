export default function Test({ testData, getIdToken, setTestData }) {
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
                    onClick={async () => {
                        const res = await fetch(`/api/teststart?token=${await getIdToken()}`)
                        if(res.ok) {
                            const data = await res.json();
                            setTestData(data);
                        }
                    }}
                >
                    Start Test
                </button>
            </>
        )
    }
    if(testData.stage === 1) {
        return (
            "the actual test"
        )
    }
};