const services = require('./services');
const Boom = require('boom');
const Validator = require('fastest-validator');
const v = new Validator();
const jwt = require('jsonwebtoken');

module.exports = {
    auth: async ctx => {
        const { request: {body}, response } = ctx;
        const schema = {
            email: { max: 255, min: 5, type: 'string'},
            password: { max: 16, min: 8, type: 'string'}
        }
        const errors = v.validate(body, schema);

        if(Array.isArray(errors) && errors.length){
            response.status = 400;
            response.body = Boom.badRequest(null, errors);
            return;
        }
        const user = await services.auth(body);
        if(user){
            response.body = {
                token: jwt.sign({ email: user.email }, 'mysecret')
            } 
        }else{
            response.status = 401;
            response.body = { result: Boom.unauthorized() }
        }
    }
}