import { request, response} from 'express';
import { EducacionQueries } from "../queries/educacion.query.js";
import {ContactameQueries} from "../queries/contactame.query.js";
import {TiposHabilidadesQueries} from "../queries/tiposHabilidades.queries.js";

class EducacionController {

    async processData(request, response) {
        const body = request.body;
        console.log('data from front', body);
        return response.status(403).json({ok: true, message:'data received'});
    }

    async create(req, res) {
        const body = req.body;
        const query = await EducacionQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await EducacionQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async deleteOne(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await EducacionQueries.delete({
            idEscuela: body.idEscuela
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

        const id = body.idEscuela;
        const updNombre = body.nombreEscuela;
        const updGeneracion = body.generacion;
        const updTipo = body.tipo;
        const updComentario = body.comentario;

        const query = await EducacionQueries.update(id, updNombre, updGeneracion, updTipo, updComentario);
        if (query.ok) {
            console.log('Se logró raza');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }

}

export const educacionController = new EducacionController();