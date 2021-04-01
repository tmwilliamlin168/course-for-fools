import {database} from '../../utils/firebase'
import verifyToken from '../../utils/verifyToken';

const usersRef=database.ref('users');

export default async (req, res) => {
    const ui = await verifyToken(req.query.token);
    if(!ui) {
        res.status(400).end();
        return;
    }

    console.log(ui);
    const uid=ui.uid;
    const userRef=usersRef.child(uid);
    let user=await userRef.once('value');
    if (!user.exists()) {
		//create new
        await userRef.set({name: ui.name, email: ui.email, testData: {stage: 0}});
        user=await userRef.once('value');
	} else {
        
    }

    res.status(200).json(user.testData);
}