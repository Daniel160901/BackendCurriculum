import { HabilidadesModel } from "../models/habilidades.model.js";

class habilidadesQueries {

    async findAll(condition = {}) {
        try {
            const query = await HabilidadesModel.findAll({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }
}

export const HabilidadesQueries = new habilidadesQueries();