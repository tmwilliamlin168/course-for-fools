const problemCheckers = [
    (oldData, action) => {
        if(action === '6')
            return {ac: 1};
        return {wa: 1};
    },
    (oldData, action) => {
        if(action === '25')
            return {ac: 1};
        return {wa: 1};
    },
    (oldData, action) => {
        const l=action.split('');
        if(l.length !== 25 || l.some(c => c !== '0' && c !== '1'))
            return {wa: 1};
        let cnt=0;
        for(let i=0; i<5; ++i) {
            for(let j=0; j<5; ++j) {
                if(!(l[i*5+j] === '1' || i > 0 && l[(i-1)*5+j] === '1' || i < 4 && l[(i+1)*5+j] === '1' || j > 0 && l[i*5+(j-1)] === '1' || j < 4 && l[i*5+(j+1)] === '1'))
                    return {wa: 1};
                if(l[i*5+j] === '1')
                    ++cnt;
            }
        }
        if(cnt > 7)
            return {wa: 1};
        return {ac: 1};
    },
    (oldData, action) => {
        if(action === '000')
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