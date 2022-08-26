import { request, response} from 'express';
import { TextosQueries } from "../queries/textos.query.js";

class TextosController {



    async create(req, res) {
        const body = req.body;
        const query = await TextosQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async findAll(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await TextosQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async deleteOne(req, res) {
        const body = req.body;
        const query = await TextosQueries.delete({
            idTexto: body.idTexto
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

        const id = body.idTexto;
        const updTexto = body.texto;

        const query = await TextosQueries.update(id, updTexto);
        if (query.ok) {
            console.log('Se logró raza');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }

}

export const textosController = new TextosController();