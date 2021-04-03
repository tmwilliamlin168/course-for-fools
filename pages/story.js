import Head from 'next/head';

import Header from '../components/header';

export default function Story() {
    return (
        <>
            <Head>
                <title>CP: Zero to Hero | Story</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">
                <Header />
                <div className="-mt-16 pt-24 pb-8 max-w-prose mx-auto">
                    It was March 32nd, 2021. It was 1 am, and I sat at my desk, just remembering that I had promised someone I would make a course by April 2021. I realized that I had made no progress at all, so I got to work.
                    <br />
                    <br />
                    [To be continued...]
                </div>
            </div>
        </>
    );
}