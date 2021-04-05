const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = new Koa();
const router = new Router();
const applyRoutes = require('./routes');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

module.exports = () => {
    console.log('[zserver] Criando um novo servidor! ...');
    mongoose.connect('mongodb://localhost:27017/zaratech', { useNewUrlParser: true });
    requireDir('../../src/features/usuario');
    applyRoutes(router);
    app.use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());
    app.listen(9988);
}