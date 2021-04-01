import checkProblem from '../../utils/checkProblem';
import {database} from '../../utils/firebase';
import verifyInteger from '../../utils/verifyInteger';
import verifyToken from '../../utils/verifyToken';

const usersRef=database.ref('users');

export default async (req, res) => {
    const pid = +req.query.pid;
    if(!verifyInteger(pid)) {
        res.status(400).end();
        return;
    }
    const ui = await verifyToken(req.query.token);
    if(!ui) {
        res.status(400).end();
        return;
    }

    const uid=ui.uid;
    const userRef=usersRef.child(uid);
    const user=await userRef.once('value');
    const curTime = new Date().getTime();
    if (!user.exists() || user.val().testData.stage !== 1 || curTime-user.val().startTime > 30*60*1000) {
		//tf
        res.status(400).end();
        return;
	}

    const problemData = (await userRef.child(`testData/problems/${pid}`).once('value')).val();
    const newData = checkProblem(pid, problemData, req.query.action);
    if(!newData) {
        res.status(400).end();
        return;
    }
    await userRef.child(`testData/problems/${pid}`).set(newData);

    res.status(200).json((await userRef.once('value')).val().testData);
}