import { request, response} from 'express';
import {UserQueries} from "../queries/user.query.js";
import { Payload } from "../helpers/payload.js";
import {ContactameQueries} from "../queries/contactame.query.js";
import {UserModel} from "../models/user.model.js";

class UserController {

    static payload = new Payload();

    async processData(request, response) {
        const body = request.body;
        console.log('data from front', body);
        return response.status(403).json({ok: true, message:'data received'});
    }

    async create(req, res) {
        const body = req.body;
        const query = await UserQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async findOne(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await UserQueries.findOne(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findAll(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await UserQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }


    async login(req, res){
        const body = req.body;
        console.log(body);

        const query = await UserQueries.findOne({
            username: body.username,
            password: body.password
        });

        if (query.ok) {
            try {
                const token = UserController.payload.createToken(query.data);
                return res.status(200).send({
                    ok: true,
                    token: token,
                    data: query.data
                });
            } catch (e) {
                return res.status(400).send({
                    ok: false,
                    data: null
                });
            }
        }
    }

    async deleteOne(req, res) {
        const body = req.body;
        const query = await UserQueries.delete({
            idUsuario: body.idUsuario
        });
        if (query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    /*async update(req, res) {
        console.log('Se intentará el update');

        const body = req.body;

        const info = body.info;
        const condition = body.condition;

        const query = await UserQueries.update(info, condition);
        if (query.ok) {
            return res.status(200).json({ok: true, data: query.data, message: 'se hizo el update'});
            console.log('Se hizo el update');
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
            console.log('No se hizo el update');
        }
    }*/

    async update(req, res) {
        console.log('Se intentará el update');

        const body = req.body;

        const id = body.idUsuario;
        const updUsername = body.username;
        const updPassword = body.password;

        const query = await UserQueries.update(id, updUsername, updPassword);
        if (query.ok) {
            console.log('Se logró raza');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }
}

export const userController = new UserController();