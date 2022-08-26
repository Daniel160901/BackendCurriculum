import { request, response} from 'express';
import { ContactameQueries } from "../queries/contactame.query.js";
import {UserQueries} from "../queries/user.query.js";

class ContactameController {

    async processData(request, response) {
        const body = request.body;
        console.log('data from front', body);
        return response.status(403).json({ok: true, message:'data received'});
    }

    async create(req, res) {
        const body = req.body;
        const query = await ContactameQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async findAll(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ContactameQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async deleteOne(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ContactameQueries.delete({
            idContactame: body.idContactame
        });
        if (query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async update(req, res) {
        console.log('Se intentará el update');

        const body = req.body;

        const id = body.idContactame;
        const updTipo = body.tipo;
        const updInfo = body.info;

        const query = await ContactameQueries.update(id, updTipo, updInfo);
        if (query.ok) {
            console.log('Se logró raza');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }

}

export const contactameController = new ContactameController();