import Head from 'next/head';
import Link from 'next/link';

export default function Result({name}) {
    return (
        <>
            <Head>
                <title>Result for {name}</title>
            </Head>
            <div className="flex mt-20 justify-center h-screen">
                <div className=" ">
                <div className="max-w-2xl h-100 bg-gray-200 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-6">

                        <p className="text-gray-700 text-base mx-7">
                        Dear {name},
                        </p>
                        <br/>
                        <p className="text-gray-700 text-base mx-7">
                        The admissions committee has carefully reviewed your application. After much consideration, it is with great regret that we must inform you we are unable to offer you a spot in the beta course.
                        <br/>
                        <br/>
                        </p>
                            <p className="text-gray-700 text-base mx-7">
                            The course was extremely popular and there was a large number 
                                of strong applicants; in light of this, we were unable to offer a spot to every worthy applicant.
                            </p>
                        <br/>

                        <p className="text-gray-700 text-base mx-7">
                            We recognize that this letter may come as a disappointment to you. Nevertheless, we encourage you to continue practicing competitive programming and wish
                            you the best of luck in your future programming competitions.
                        </p>
                        <br/>
                        <p className="text-gray-700 text-base mx-7">
                            Lastly, we would like to thank you for the time and effort you took to submit your application. We encourage you to <Link href="/solutions"><a className="text-blue-500 hover:text-blue-600 transition">review the solutions</a></Link> to the pre-registration test and <Link href="/subscribe"><a className="text-blue-500 hover:text-blue-600 transition">subscribe for future updates</a></Link>.
                        </p>
                        <br/>

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 text-base mx-7">
                            Zero to Hero
                        </span>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const name = context.query.id || '[name]';
    return {
        props: {name},
    }
}