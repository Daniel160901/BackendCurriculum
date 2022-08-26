import { request, response} from 'express';
import { PersonaQueries } from "../queries/persona.query.js";

class PersonaController {

    async processData(request, response) {
        const body = request.body;
        console.log('data from front', body);
        return response.status(403).json({ok: true, message:'data received'});
    }

    async create(req, res) {
        const body = req.body;
        const query = await PersonaQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async findOne(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await PersonaQueries.findOne(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

}

export const personaController = new PersonaController();