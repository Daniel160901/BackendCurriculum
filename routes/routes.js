import express from 'express';
import { userController } from '../controlers/user.controlers.js';
import { educacionController } from "../controlers/educacion.controler.js";
import { validateToken } from "../middlewares/accessToken.middleware.js";
import {textosController} from "../controlers/textos.controler.js";
import {tiposHabilidadesController} from "../controlers/tiposHabilidades.controler.js";
import {contactameController} from "../controlers/contactame.controler.js";
import {personaController} from "../controlers/persona.controler.js";
import {telegramController} from "../controlers/telegram.controler.js";
import { HabilidadesController } from "../controlers/habilidades.controler.js";

export class Routes {

    /**
     * @param app
     */

    Routes(app=express.application) {
        app.get('/', (req, res) => {
            res.send('Hola mundo');
        });

        app.post('/data', (req, res)=>{
            const body = req.body;
            return res.status(200).json({ok: true, message: 'data recieved'});
        });



        //Métodos FIND
    //Encontrar usuario individual
        app.route('/find_user', userController.findOne).post([validateToken.validateJWT], userController.findOne);
    //Encontrar usuarios todos
        app.route('/find_userAll', userController.findAll).post([], userController.findAll);
    //Encontrar escuelas
        app.route('/find_educacion', educacionController.find).post([], educacionController.find);
    //Encontrar textos
        app.route('/find_textos', textosController.findAll).post([], textosController.findAll);
    //Encontrar habilidades
        app.route('/find_habs', tiposHabilidadesController.findAll).post([], tiposHabilidadesController.findAll);
    //Encontrar contactos
        app.route('/find_contact', contactameController.findAll).post([], contactameController.findAll);
    //Encontrar personas
        app.route('/find_persona').post(personaController.findOne);
    //Encontrar habilidades
        app.route('/find_habilidades', HabilidadesController.findAll).post([], HabilidadesController.findAll);


    //Hacer login
        app.post('/login', userController.login);

        //Métodos CREATE
    //Enviar escuela
        app.post('/escuela_create', educacionController.create);
    //Enviar contacto
        app.post('/contact_create', contactameController.create);
    //Enviar habilidad
        app.post('/hab_create', tiposHabilidadesController.create);
    //Enviar textos
        app.post('/texto_create', textosController.create);
    //Enviar usuario
        app.post('/user_create', userController.create);

        //Métodos DELETE
    //Eliminar contactame
        app.route('/contact_delete', contactameController.deleteOne).post([], contactameController.deleteOne);
    //Eliminar escuela
        app.route('/escuela_delete', educacionController.deleteOne).post([], educacionController.deleteOne);
    //Eliminar texto
        app.route('/texto_delete', textosController.deleteOne).post([], textosController.deleteOne);
    //Eliminar habilidad
        app.route('/hab_delete', tiposHabilidadesController.deleteOne).post([], tiposHabilidadesController.deleteOne);
    //Eliminar user
        app.route('/user_delete', userController.deleteOne).post([], userController.deleteOne);

        //Métodos Update
    //Update user
        app.route('/user_update', userController.update).post([], userController.update);
    //Update contactame
        app.route('/contact_update', contactameController.update).post([], contactameController.update);
    //Update texto
        app.route('/texto_update', textosController.update).post([], textosController.update);
    //Update habilidades
        app.route('/habs_update', tiposHabilidadesController.update).post([], tiposHabilidadesController.update);
    //Update educacion
        app.route('/edu_update', educacionController.update).post([], educacionController.update);


        //Telegram
        app.post('/mensajes', telegramController.sendTelegramMessages);
    }



}
