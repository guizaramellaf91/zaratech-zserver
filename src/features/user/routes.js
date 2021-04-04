const controllers = require('./controllers');

module.exports = router => {
    router.post('/server/api/user', controllers.create)
}