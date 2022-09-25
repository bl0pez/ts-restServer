import { Request, Response, NextFunction } from 'express';
import { matchedData } from 'express-validator';

import User from '../models/user';

const emailExist = async (req: Request, res: Response, next: NextFunction) => {

    const { email } = matchedData(req);

    const user = await User.findOne({ where: { email } });

    if (user) {
        return res.status(400).json({
            msg: `Email ${email} already exist`
        })
    }

    next();

}

export default emailExist;