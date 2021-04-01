const problemCheckers = [
    (oldData, action) => {
        if(action === '25')
            return {ac: 1};
        return {wa: 1};
    },
    (oldData, action) => {
        if(action === '0')
            return {ac: 1};
        return {wa: 1};
    },
];

export default function checkProblem(pid, oldData, action) {
    return problemCheckers[pid](oldData, action);
}