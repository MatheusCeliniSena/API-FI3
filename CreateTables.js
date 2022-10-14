const { Client } = require('pg');

const configs = {
    user: 'postgres',
    host: 'localhost',
    database: 'Faculdade',
    password: 'postgres',
    port: '5432'
}

exports.createTable = (paramsObject) => {
    const db = new Client(configs);

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
        create table Filmes_Matheus_Sena (
            id serial primary key,
            name varchar not null,
            is_on_nextflix boolean not null,
            imdb_score int,
            director varchar NOT NULL,
            genre varchar NOT NULL
        );
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