import {auth} from './firebase'

export default async function verifyToken(token) {
    if(typeof token !== 'string')
        return null;
    return await auth.verifyIdToken(token).then(decodedToken => decodedToken).catch(err => {
        console.log(err);
        return null;
    });
}