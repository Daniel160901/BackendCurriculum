import { EducacionModel } from "../models/educacion.model.js";
import {ContactameModel} from "../models/contactame.model.js";
import {TiposHabilidadesModel} from "../models/tiposHabilidades.model.js";

class educacionQueries {

    async store(educacion) {
        try {
            const query = await EducacionModel.create(educacion);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null };
        }
    }

    async findAll(condition = {} ) {
        try {
            const query =  await EducacionModel.findAll({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async delete(condition = {}) {
        try {
            const query = await EducacionModel.destroy({where: condition});
            if (query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query delete/contactame', e);
            return { ok: false, data: null};
        }
    }

    async update(idd, name, generation, type, coment) {

        try{
            const query = await EducacionModel.update({nombreEscuela: name, generacion: generation, tipo: type, comentario: coment}, {where: { idEscuela: idd}});
            console.log('Intentanding upd');
            if (query){
                return { ok: true, data: query};
                console.log('Se hizo el update');
            }
        } catch (e) {
            console.log('Error al ejecutar el query update/user', e);
            return {ok:false, data: null};
        }
    }
}

export const EducacionQueries = new educacionQueries();