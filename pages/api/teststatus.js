import {auth, database} from '../../utils/firebase'

export default (req, res) => {
    if(typeof req.query.token !== 'string') {
        res.status(400);
        return;
    }
    auth.verifyIdToken(req.query.token).then((decodedToken) => {
        console.log(decodedToken.uid);
        res.status(200).json({ stage: 0 })
    }).catch(err=>{
        console.log(err);
        res.status(400);
    })
}