import { Request, Response } from "express";
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {

    try {
        const name = req.body.name as string
        const age = req.body.age as string

        const newUser = await User.create({
            name,
            age
        })
        res.redirect('/')

    } catch (error) {
        return res.status(500).json({ mensagem: 'erro inesperado ' });

    }

};