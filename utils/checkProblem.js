const problemCheckers = [
    (oldData, action) => {
        if(action === 'a')
            return {ac: 1};
        return {wa: 1};
    }
];

export default function checkProblem(pid, oldData, action) {
    return problemCheckers[pid](oldData, action);
}