import { Request, Response } from "express";
import { matchedData } from "express-validator";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {

    const [users, count] = await Promise.all([
        User.findAll({
            where: {
                status: true
            }
        }),
        User.count({
            where: {
                status: true
            }
        })
    ]);

    res.json({
        users,
        count
    });

}

export const getUser = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: `User with id ${id} not found`
            });
        }

        res.json(user);


    } catch (error: any) {
        res.status(500).json({
            msg: 'internal server error'
        });
    }

}

export const postUser = async (req: Request, res: Response) => {
    try {
        const { body } = req;

        const user = await User.create(body);

        res.json(user)

    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            msg: 'internal server error'
        });
    }

}

export const putUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { email, name } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: `User with id ${id} not found`
            });
        }

        await user.update(email, name);

        res.json(user);
    } catch (error: any) {
        res.status(500).json({
            msg: 'internal server error'
        });
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }

    /* await user.destroy(); */

    await user.update({ status: false });

    res.json({
        msg: `User with id ${id} deleted`
    });

}