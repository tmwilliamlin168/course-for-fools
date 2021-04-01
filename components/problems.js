import {useEffect, useState} from 'react';

import SubmitButton from './SubmitButton';

const Pattern1 = ({a}) => {
    const b=['', ' top-8 lg:top-16', ' top-16 lg:top-32'];
    const c=[' top-8 lg:top-16', ' top-4 lg:top-8', ''];
    const d=[' h-8 lg:h-16', ' h-16 lg:h-32', ' h-24 lg:h-48'];
    return (
        <div className="inline-block w-24 h-24 lg:w-48 lg:h-48">
            <div className="relative">
                <div className={"absolute rounded-full h-8 w-8 lg:h-16 lg:w-16 bg-blue-500 "+b[a[0]]}></div>
                <div className={"absolute rounded left-8 lg:left-16 inline-block w-8 lg:w-16 bg-green-500 "+c[a[1]]+d[a[1]]}></div>
                <div className={"absolute left-16 lg:left-32 rounded-full h-8 w-8 lg:h-16 lg:w-16 bg-blue-500 "+b[a[2]]}></div>
            </div>
        </div>
    );
};

const Square1 = ({c}) => {
    return <div className={"inline-block border border-black h-8 w-8 lg:h-12 lg:w-12 transition "+c}></div>;
}

export default [
    ({testAction}) => {
        const [value, setValue] = useState();
        return (
            <div className="text-center pt-4">
                <p className="text-xl lg:text-3xl mx-auto w-3/4">If it takes 6 days for 6 groups of 6 programmers to write 6 programs with 600 lines each, how many days does it take 7 groups of 7 programmers to write 7 programs with 700 lines each?</p>
                <br />
                {'Answer: '}
                <input
                    type="number"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <br />
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=0&action=${value}&`)}
                />
            </div>
        );
    },
    ({testAction}) => {
        const [value, setValue] = useState();
        return (
            <div className="text-center pt-4">
                <p className="text-xl lg:text-3xl">Find the next number: 1, 6, 4, 6, 9, 6, 16, 6</p>
                <br />
                {'Answer: '}
                <input
                    type="number"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <br />
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=1&action=${value}&`)}
                />
            </div>
        );
    },
    ({testAction}) => {
        const [state, setState] = useState(new Array(25).fill(0));
        return (
            <div className="text-center pt-4">
                <p className="text-xl lg:text-3xl">
                    Highlight at most 7 cells so that all unhighlighted cells are next to a highlighted cell
                </p>
                <br />
                <div className="inline-grid grid-cols-5 gap-1">
                    {state.map((s, i) => {
                        return (
                            <button
                                key={i}
                                className={'inline-block w-14 h-14 border border-blue-500 transition'+(s?' bg-blue-500':'')}
                                onClick={() => {
                                    const newState = [...state];
                                    newState[i]=1-newState[i];
                                    setState(newState);
                                }}
                            />
                        )
                    })}
                </div>
                <br />
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=2&action=${state.join('')}&`)}
                />
            </div>
        );
    },
    ({testAction}) => {
        const [valueA, setValueA] = useState();
        const [valueB, setValueB] = useState();
        const [valueC, setValueC] = useState();
        return (
            <div className="text-center pt-4">
                <p className="text-xl lg:text-3xl">Find any solution for (a, b, c):</p>
                <p className="text-xl lg:text-3xl">a=b(a+b+c)</p>
                <p className="text-xl lg:text-3xl">b(b+c)=a</p>
                <p className="text-xl lg:text-3xl">c=2b</p>
                <br />
                {'Answer: '}
                <input
                    type="number"
                    value={valueA}
                    onChange={e => setValueA(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <input
                    type="number"
                    value={valueB}
                    onChange={e => setValueB(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <input
                    type="number"
                    value={valueC}
                    onChange={e => setValueC(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <br />
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=3&action=${valueA}${valueB}${valueC}&`)}
                />
            </div>
        )
    },
    ({testAction}) => {
        const patterns = [
            [2, 2, 2],
            [1, 2, 1],
            [2, 1, 1],
            [0, 0, 2],
            [1, 1, 0],
            [2, 1, 0],
        ];

        const [selected, setSelected] = useState(-1);
        
        return (
            <div className="text-center pt-4">
                <div className="inline-grid grid-cols-3 gap-2 items-center">
                    <Pattern1 a={[0, 0, 0]} />
                    <Pattern1 a={[1, 2, 0]} />
                    <Pattern1 a={[2, 1, 0]} />
                    <Pattern1 a={[0, 2, 1]} />
                    <Pattern1 a={[1, 1, 1]} />
                    <Pattern1 a={[2, 0, 1]} />
                    <Pattern1 a={[0, 1, 2]} />
                    <Pattern1 a={[1, 0, 2]} />
                    <p className="text-4xl font-bold">
                        ???
                    </p>
                </div>
                <br />
                <br />
                <p className="text-xl lg:text-3xl">Select the best matching pattern:</p>
                <br />
                <div className="inline-grid grid-cols-3 gap-2 my-4">
                    {patterns.map((p, i) => {
                        return (
                            <button
                                key={i}
                                onClick={() => setSelected(i)}
                                className={i === selected ? 'rounded ring-2 ring-blue-500 transition' : ''}
                            >
                                <Pattern1 a={p} />
                            </button>
                        )
                    })}
                </div>
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=4&action=${selected}&`)}
                />
            </div>
        )
    },
    ({testAction, problemData}) => {
        const size = [3, 5, 7, 9];
        const [waiting, setWaiting] = useState(false);
        useEffect(() => {
            setWaiting(false);
        }, [problemData?.turn]);
        return (
            <div className="text-center pt-4">
                <div className="mx-auto text-xl lg:text-3xl w-3/4">
                    Let's play a game!
                    <br />
                    You will play against Bob and take turns capturing tiles with your armies. To win the game, you need to have your army separated into fewer regions than Bob. A region is a set of (horizontally) connected cells captured by the same player.
                    <br />
                    For example,{' '}
                    <div className="inline-flex space-x-1">
                        <Square1 c="bg-blue-500" />
                        <Square1 c="bg-blue-500" />
                        <Square1 c="bg-red-500" />
                        <Square1 c="bg-red-500" />
                        <Square1 c="bg-blue-500" />
                        <Square1 c="bg-red-500" />
                        <Square1 c="bg-blue-500" />
                    </div>
                    {' '}is a win for you because Bob has 3 regions and you only have 2.
                    <br />
                    The game ends when there are no tiles left to capture. Bob has graciously allowed you to go first!
                </div>
                <br />
                {size.map((s,i) => {
                    return (
                        <div key={i} className="flex space-x-1 justify-center m-4">
                            {(() => {
                                const l=[];
                                for(let j=0; j<s; ++j) {
                                    l.push(
                                        <button
                                            key={j}
                                            disabled={waiting || problemData?.board && problemData.board[i][j] !== '.'}
                                            onClick={() => {
                                                if(!problemData.board) {
                                                    problemData.board = new Array();
                                                    for(let i=0; i<size.length; ++i)
                                                        problemData.board.push(new Array(size[i]).fill('.'));
                                                }
                                                problemData.board[i][j]='r';
                                                setWaiting(true);
                                                testAction(`/api/testupdate?pid=5&action=${i},${j}&`);
                                            }}
                                        >
                                            <Square1 c={!problemData?.board || problemData.board[i][j] === '.' ? '' : (problemData.board[i][j] === 'b' ? "bg-blue-500" : "bg-red-500")} />
                                        </button>
                                    );
                                }
                                return l;
                            })()}
                        </div>
                    )
                })}
                <br />
                <button
                    className="bg-blue-500 my-2 mx-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                    onClick={() => testAction('/api/testupdate?pid=5&action=reset&')}
                >
                    Reset
                </button>
            </div>
        );
    },
    ({testAction}) => {
        const [valueA, setValueA] = useState();
        const [valueB, setValueB] = useState();
        return (
            <div className="text-center pt-4">
                <div className="mx-auto text-xl lg:text-3xl w-3/4">
                    Bob wants to play another game!
                    <br />
                    You start by giving him 2 positive integers A and B from 1 to 1000. In one turn, he can either double A and add one to B or double B and add one to A.
                    <br />
                    Here's an example sequence of steps that he could take:
                    <br />
                    {'(0, 1) => (1, 2) => (2, 3) => (4, 4) => (8, 5)'}
                    <br />
                    You want to prevent him from making A and B equal. Choose A and B for him so that he will lose no matter what!
                </div>
                <br />
                {'Answer: '}
                <input
                    type="number"
                    value={valueA}
                    onChange={e => setValueA(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <input
                    type="number"
                    value={valueB}
                    onChange={e => setValueB(e.target.value)}
                    className="rounded-md border border-blue-500 outline-none p-1 m-1"
                />
                <br />
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=6&action=${valueA},${valueB}&`)}
                />
            </div>
        )
    },
    ({testAction}) => {
        const [piles, setPiles] = useState([7, 7, 9, 5, 7]);
        return (
            <div className="text-center pt-4">
                <p className="text-xl lg:text-3xl w-3/4 mx-auto">
                    After defeating Bob, you think that he's too easy of an opponent for you. Thus, you are now playing yourself. You have five piles of coins. In one turn, you can add one stone to one pile and remove one stone from all the other piles.
                    <br />
                    You win if only one stone is left.
                </p>
                <br />
                {piles.map((p, i) => 
                    <button
                        key={i}
                        className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition m-2"
                        disabled={piles.some((p2, j) => j !== i && !p2)}
                        onClick={() => {
                            const newPiles=[...piles];
                            for(let j=0; j<piles.length; ++j)
                                --newPiles[j];
                            newPiles[i] += 2;
                            setPiles(newPiles);
                        }}
                    >
                        {p} stones
                    </button>
                )}
                <br />
                <button
                    className="bg-blue-500 my-2 mx-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                    onClick={() => {
                        testAction('/api/testupdate?pid=7&action=reset&');
                        setPiles([7, 7, 9, 5, 7]);
                    }}
                >
                    Reset
                </button>
            </div>
        );
    },
];