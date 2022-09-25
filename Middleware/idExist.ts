import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

const idExist = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }

    next();

}

export default idExist;