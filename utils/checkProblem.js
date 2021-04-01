import { CssSyntaxError } from "postcss";
import verifyInteger from "./verifyInteger";

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
    (oldData, action) => {
        if(!oldData)
            oldData = {};
        if(!oldData.turn)
            oldData.turn=0;
        ++oldData.turn;
        const s=[3, 5, 7, 9];
        if(action === 'reset')
            oldData.board = null;
        if(!oldData.board) {
            oldData.board = new Array();
            for(let i=0; i<s.length; ++i)
                oldData.board.push(new Array(s[i]).fill('.'));
        }
        if(action === 'reset')
            return oldData;
        let a=action.split(',');
        if(a.length !== 2)
            return null;
        a=[+a[0], +a[1]];
        if(!verifyInteger(a[0]) || !verifyInteger(a[1]) || a[0] < 0 || a[0] >= s.length || a[1] < 0 || a[1] >= s[a[0]] || oldData.board[a[0]][a[1]] !== '.')
            return null;
        oldData.board[a[0]][a[1]] = 'r';
        const cs = [];
        for(let i=0; i<s.length; ++i)
            for(let j=1; j<s[i]-1; ++j)
                if(oldData.board[i][j] === '.')
                    cs.push([i, j]);
        if(!cs.length) {
            for(let i=0; i<s.length; ++i) {
                if(oldData.board[i][0] === '.')
                    cs.push([i, 0]);
                if(oldData.board[i][s[i]-1] === '.')
                    cs.push([i, cs[i]-1]);
            }
        }
        const c=cs[Math.floor(Math.random()*cs.length)];
        oldData.board[c[0]][c[1]]='b';
        return oldData;
    },
    (oldData, action) => {
        return {wa: 1};
    },
];

export default function checkProblem(pid, oldData, action) {
    return problemCheckers[pid](oldData, action);
}