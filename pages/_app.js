import '../styles/app.css';
import {FirebaseProvider} from '../utils/FirebaseContext';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  );
}

export default MyApp
