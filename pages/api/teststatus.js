import {database} from '../../utils/firebase'
import verifyToken from '../../utils/verifyToken';

export default async (req, res) => {
    const ui = await verifyToken(req.query.token);
    if(!ui) {
        res.status(400).end();
        return;
    }
    console.log(ui);
    res.status(200).json({stage:0});
}