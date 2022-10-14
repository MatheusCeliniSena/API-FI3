const { Client } = require('pg');

const configs = {
    user: 'postgres',
    host: 'localhost',
    database: 'Faculdade',
    password: 'postgres',
    port: '5432'
}

exports.deleteMovies = (paramsObject) => {
    const db = new Client(configs);

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        console.log('Models/Read - erro:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
            DELETE FROM filmes_matheus_sena  WHERE id = ${paramsObject} RETURNING id; 
        `

        const succesful = (data) => {
            db.end();

            result.data = data.rows;
            return result;
        };

        return db.query(query)
            .then(succesful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)
}