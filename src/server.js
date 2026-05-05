import express from 'express';
import confingViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';

const app = express();

//config view engine
//confingViewEngine(app);
app.use(express.static('./src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

//init web routes
initWebRoutes(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

