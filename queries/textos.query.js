import { TextosModel } from "../models/textos.model.js";
import {ContactameModel} from "../models/contactame.model.js";
import {UserModel} from "../models/user.model.js";

class textosQueries {

    async store(texto) {
        try {
            const query = await TextosModel.create(texto);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null };
        }
    }

    async find(condition = {}) {
        try {
            const query = await TextosModel.findAll({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async findAll(condition = {} ) {
        try {
            const query =  await TextosModel.findAll({ where: condition} );
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
            const query = await TextosModel.destroy({where: condition});
            if (query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query delete/contactame', e);
            return { ok: false, data: null};
        }
    }

    async update(idd, textoo) {

        try{
            const query = await TextosModel.update({texto: textoo}, {where: { idTexto: idd}});
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

export const TextosQueries = new textosQueries();