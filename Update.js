const { Client } = require('pg');

const configs = {
    user: 'postgres',
    host: 'localhost',
    database: 'Faculdade',
    password: 'postgres',
    port: '5432'
}

exports.PutMovies = (paramsObject) => {
    const db = new Client(configs);

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        console.log('Models/Update - erro:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
        UPDATE Filmes_Matheus_Sena
        SET CAMPO = (4,'Programação 123',FALSE,22,'Eu mesmo','Desastre')
        WHERE (id,name,is_on_nextflix,imdb_score,director,genre)
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