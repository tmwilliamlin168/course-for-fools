export default [
    testAction => {
        return (
            <>
                Problem 1
                <button
                    onClick={() => testAction('/api/testupdate?pid=0&action=a&')}
                >
                    A
                </button>
                <button
                    onClick={() => testAction('/api/testupdate?pid=0&action=b&')}
                >
                    B
                </button>
            </>
        )
    },
    testAction => 'problem 2',
];