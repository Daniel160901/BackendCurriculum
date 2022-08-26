import { PersonaModel } from "../models/persona.model.js";

class personaQueries {

    async store(user) {
        try {
            const query = await PersonaModel.create(user);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null };
        }
    }

    async findAll(condition = {}) {
        try {
            const query = await PersonaModel.findAll({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async findOne(condition = {} ) {
        try {
            const query =  await PersonaModel.findOne({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }
}

export const PersonaQueries = new personaQueries();