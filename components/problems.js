import {useState} from 'react';

import SubmitButton from './SubmitButton';

const Pattern1 = ({a}) => {
    const b=['', ' top-16', ' top-32'];
    const c=[' top-16', ' top-8', ''];
    const d=[' h-16', ' h-32', ' h-48'];
    return (
        <div className="inline-block w-48 h-48">
            <div className="relative">
                <div className={"absolute rounded-full h-16 w-16 bg-blue-500 "+b[a[0]]}></div>
                <div className={"absolute rounded left-16 inline-block w-16 bg-green-500 "+c[a[1]]+d[a[1]]}></div>
                <div className={"absolute left-32 rounded-full h-16 w-16 bg-blue-500 "+b[a[2]]}></div>
            </div>
        </div>
    );
};

export default [
    ({testAction}) => {
        const patterns = [
            [0, 2, 0],
            [1, 2, 1],
            [2, 1, 1],
            [0, 0, 2],
            [1, 1, 0],
            [0, 1, 0],
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
                <p className="text-3xl">Select the best matching pattern:</p>
                <br />
                <div className="inline-grid grid-cols-3 gap-2 my-4">
                    {patterns.map((p, i) => {
                        return (
                            <button
                                key={i}
                                onClick={() => setSelected(i)}
                                className={i === selected ? 'ring-2 ring-blue-500' : ''}
                            >
                                <Pattern1 a={p} />
                            </button>
                        )
                    })}
                </div>
                <br />
                <SubmitButton
                    onClick={() => testAction(`/api/testupdate?pid=0&action=${selected}&`)}
                />
            </div>
        )
    },
    ({testAction}) => 'problem 2',
];