import { TiposHabilidadesModel } from "../models/tiposHabilidades.model.js";
import {ContactameModel} from "../models/contactame.model.js";
import {UserModel} from "../models/user.model.js";

class tiposHabilidadesQueries {

    async store(habs) {
        try {
            const query = await TiposHabilidadesModel.create(habs);
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
            const query = await TiposHabilidadesModel.findAll({ where: condition} );
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
            const query =  await TiposHabilidadesModel.findOne({ where: condition} );
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
            const query = await TiposHabilidadesModel.destroy({where: condition});
            if (query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query delete/contactame', e);
            return { ok: false, data: null};
        }
    }

    async update(idd, nombre, porcenta, hability) {

        try{
            const query = await TiposHabilidadesModel.update({nombreTipo: nombre, porcentaje: porcenta, habilidad: hability}, {where: { idHabs: idd}});
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

export const TiposHabilidadesQueries = new tiposHabilidadesQueries();