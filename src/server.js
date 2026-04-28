import express from 'express';
import confingViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';

const app = express();

//config view engine
confingViewEngine(app);

//init web routes
initWebRoutes(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

