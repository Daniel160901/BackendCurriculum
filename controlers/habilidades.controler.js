import { HabilidadesQueries } from "../queries/habilidades.query.js";

class habilidadesController{

    async findAll(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await HabilidadesQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }
}
export const HabilidadesController = new habilidadesController();