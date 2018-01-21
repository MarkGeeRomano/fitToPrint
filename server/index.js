const express = require(`express`);
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cron = require('node-cron');

const newsController = require(`./controllers/newsController`);
const mediaController = require(`./controllers/mediaController`);
const userController = require(`./controllers/userController`);
const archiveController = require(`./controllers/archiveController`);

const webpack = require('webpack');
const config = require('../webpack.config.dev');
const compiler = webpack(config);

const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public'));

// const addArchive = (req, res, next) => userController.getUser(req, res, next, true);

// app.post(`/test`,(r)=>console.log(`rbody:`,r.body))
app.get('/newsAPI', mediaController.queryNews);
app.post(`/login`, userController.verifyUser, mediaController.queryNews);
app.post(`/createUser`, userController.createUser, mediaController.queryNews);
app.post(`/addArchive`, userController.getUser,archiveController.addArchive);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

const updateArticles = async () => {
    console.log(`updating articles`);
    const stories = await newsController.getNews();
    const documents = await mediaController.updateArticles(stories);
};

cron.schedule('* * 1 * * *', updateArticles, false).start();

const port = process.env.NODE_ENV === 'development' ? 9443 : 8446;
app.listen(port, () => console.log(`server listening at http://localhost:${port}`));

const token = require(`./utilities/token`);
const uri = `mongodb://admin:${token}@ds115396.mlab.com:15396/allthenews`;
mongoose.connect(uri, () => console.log('connected to mongo'));
