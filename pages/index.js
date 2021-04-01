import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

import Header from '../components/header'
import useFirebase from '../utils/useFirebase';

export default function Home() {
  const router = useRouter();

  const firebase = useFirebase();

  const firebaseLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebase.auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // var token2 = await user.getIdToken();
        // ...
        // console.log(result)
        // console.log(credential)
        // console.log(token)
        // console.log(user)
        // console.log(token2);
        router.push('/register');
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        // console.log(errorCode)
        // console.log(errorMessage)
        // console.log(email)
        // console.log(credential)
      });

  };

  return (
    <>
      <Head>
        <title>Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-8 lg:gap-8">
            <div className="mx-auto lg:ml-0 max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center lg:col-span-5">
              <div className="lg:py-24">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Competitive Programming:</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block">
                    Zero to Hero
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Learn Competitive Programming with no previous experience required.
                  <br />
                  Taught by blah blha blah
                </p>
                <div className="mt-8 sm:mt-12 space-x-4">
                  {/*
                  <Link
                    href="register"
                  >
                    <a className="inline-flex sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
>
                      Pre-Register Now
                    </a>
                  </Link>
                  */}
                  <button
                    className="inline-flex sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    onClick={() => firebaseLogin()}
                  >
                    Pre-Register Now
                  </button>
                  <a
                    href="mailto:classes@joincpi.org"
                    target="_blank"
                    className="inline-flex sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-md shadow bg-gray-800 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:mt-10 lg:-mb-16 lg:relative lg:col-span-3">
              <div className="mx-auto max-w-md px-4 sm:max-w-xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/classes_illustration.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
