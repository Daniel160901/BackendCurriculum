import { UserModel } from '../models/user.model.js';
import {ContactameModel} from "../models/contactame.model.js";

class userQueries {

    async store(user) {
        try {
            const query = await UserModel.create(user);
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
            const query = await UserModel.findAll({ where: condition} );
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
            const query =  await UserModel.findOne({ where: condition} );
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
            const query = await UserModel.destroy({where: condition});
            if (query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query delete/contactame', e);
            return { ok: false, data: null};
        }
    }

    /*async update(info = {}, condition = {}) {

        try{
            const query = await UserModel.update({info}, {where: condition});
            console.log('Intentanding upd');
            if (query){
                return { ok: true, data: query};
                console.log('Se hizo el update');
            }
        } catch (e) {
            console.log('Error al ejecutar el query update/user', e);
            return {ok:false, data: null};
        }
    }*/

    async update(idd, usernamee, passwordd) {

        try{
            const query = await UserModel.update({username: usernamee, password: passwordd}, {where: { idUsuario: idd}});
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

export const UserQueries = new userQueries();