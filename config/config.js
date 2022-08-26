import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Routes } from '../routes/routes.js';
import { Database } from './database.js';
import {Telegraf} from "telegraf";


dotenv.config();

class App {
    app = express.application;
    http = null;
    routes = new Routes();
    db = new Database();
    bot = null;

    constructor() {
        this.initializeApp();
    }

    async initializeApp() {
        this.app = express();
        this.config();
        this.http = http.createServer(this.app);
        await this.initDatabase();
        this.routes.Routes(this.app);
        this.bot = new Telegraf(process.env.TOKEN_BOT);
        await this.initBotListening(this.bot);
    }
    
    config() {
        this.app.use(
            express.urlencoded({
                extended: true
            }));

        this.app.use(express.json());
        
        this.app.use(cors({origin: '*' }));
    }

    async initDatabase(){
        const connection = await this.db.connection();
        console.log(connection.message);
    }

    async initBotListening(bot){
        bot.on('text', (ctx) => {
            console.log('Incoming message: ', ctx.message.text);
            //Explicit usage
            //ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

            //ctx.reply(`Hello ${ctx.state.role}`);
        });

        bot.startPolling(30, 100, null, (data) => {
            console.log('startPolling');
            console.log(data);
        })

    }
}

export default new App();