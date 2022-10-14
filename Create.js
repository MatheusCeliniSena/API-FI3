const { Client } = require('pg');

const configs = {
    user: 'postgres',
    host: 'localhost',
    database: 'Faculdade',
    password: 'postgres',
    port: '5432'
}

exports.postMovies = (paramsObject) => {
    const db = new Client(configs);

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        console.log('Models/Create - erro:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
        INSERT INTO Filmes_Matheus_Sena(id,name,is_on_nextflix,imdb_score,director,genre)VALUES(1,'As branquelas ',TRUE,98,'O homem de ferro','Comédia');
            INSERT INTO Filmes_Matheus_Sena (id, name,is_on_nextflix,imdb_score,director,genre) VALUES (2,'Interestelar',TRUE, 1000,'Matheus Sena','Ficção Cientifica');
            INSERT INTO Filmes_Matheus_Sena (id, name,is_on_nextflix,imdb_score,director,genre) VALUES (3,'O poderoso chefão',TRUE, 100,'Vinicius Carvalho','Mafia');
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