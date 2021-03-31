import 'tailwindcss/tailwind.css';

import {FirebaseProvider} from '../utils/FirebaseContext';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  );
  //return <div><Component {...pageProps}></Component></div>
}

export default MyApp
