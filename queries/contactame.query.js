import { ContactameModel } from "../models/contactame.model.js";
import {UserModel} from "../models/user.model.js";

class contactameQueries {

    async store(contact) {
        try {
            const query = await ContactameModel.create(contact);
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
            const query = await ContactameModel.findAll({ where: condition} );
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
            const query =  await ContactameModel.findOne({ where: condition} );
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
            const query = await ContactameModel.destroy({where: condition});
            if (query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query delete/contactame', e);
            return { ok: false, data: null};
        }
    }

    async update(idd, tipoo, infoo) {

        try{
            const query = await ContactameModel.update({tipo: tipoo, info: infoo}, {where: { idContactame: idd}});
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

export const ContactameQueries = new contactameQueries();