import express from 'express';
import configViewEngine from '../configs/viewEngine';
import homeController from '../controller/homeController';

let router = express.Router();
const handleHelloWorld = (req, res) => {
    return res.send('Hello World!');
}

const initWebRoute = (app) => {
    router.get('/', homeController.handleHelloWorld);
    router.get('/user', homeController.handleUserPage);
    return app.use('/', router);
}

export default initWebRoute;