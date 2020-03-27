const connection = require('../database/connection');

module.exports = {
    async ListEspecifica (request, response) {
        const ong_id = request.headers.autorizacao; // guarda na variavel a ong logada
        const incidents = await connection('incidents').where('ong_id', ong_id).select('*'); //query para buscar dados de uma ong
    
        return response.json(incidents);
    },
}