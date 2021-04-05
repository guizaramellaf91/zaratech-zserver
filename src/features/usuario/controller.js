const service = require('./service');

module.exports = {
    async insert(req, res) {
        const usuario = await service.insert(req.body);
        return res.json(usuario);
    },
    async index(req, res) {
        const { page } = req.query;
        const usuarios = await service.index({}, { page, limit: 5 });
        return res.json(usuarios);
    },
    async details(req, res) {
        const usuario = await service.detail(req.params.id);
        return res.json(usuario);
    },
    async update(req, res) {
        const usuarios = await service.update(req.params.id, req.body, { new: true });
        return res.json(usuarios);
    },
    async delete(req, res) {
        await service.delete(req.params.id);
        return res.send();
    }
}