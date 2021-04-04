const controllers = require('./controllers');

module.exports = router => {
    router.post('/server/api/auth', controllers.auth);
}