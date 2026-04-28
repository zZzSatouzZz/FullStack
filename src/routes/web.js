import express from 'express';
import configViewEngine from '../configs/viewEngine';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('home');
    });
    return app.use('/', router);
}

export default initWebRoute;