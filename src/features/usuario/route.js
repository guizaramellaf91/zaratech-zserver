const controller = require('./controller');

module.exports = router => {
    router.post('/usuarios', controller.insert);
    router.get('/usuarios', controller.index);
    router.get('/usuarios/:id', controller.details);
    router.put('/usuarios/:id', controller.update);
    router.delete('/usuarios/:id', controller.delete);
}