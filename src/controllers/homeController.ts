import { Request, Response } from 'express';

import { Product } from '../models/Product';
import { User } from '../models/User';


export const home = async (req: Request, res: Response) => {
    try {

        const users = await User.findAll();

        return res.status(200).json(users);


    } catch (error) {
        return res.status(500).json({ mensagem: 'erro inesperado ' });
    }










    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};