import {database} from '../../utils/firebase'
import verifyToken from '../../utils/verifyToken';

const usersRef=database.ref('users');

export default async (req, res) => {
    const ui = await verifyToken(req.query.token);
    if(!ui) {
        res.status(400).end();
        return;
    }

    const uid=ui.uid;
    const userRef=usersRef.child(uid);
    const user=await userRef.once('value');
    if (!user.exists() || user.val().testData.stage !== 0) {
		//tf
        res.status(400).end();
        return;
	}

    await userRef.child('testData/stage').set(1);

    res.status(200).json((await userRef.once('value')).val().testData);
}