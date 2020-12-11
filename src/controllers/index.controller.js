const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'Netflix'
})

const getPeliculas = async (req, res) => {
    const response = await pool.query('SELECT * FROM peliculas');
    res.status(200).json(response.rows);
}
const getUsuarios = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(response.rows);
}
const createUsuarios = async (req, res) => {

    const { email, password } = req.body;
    const response = await pool.query('INSERT INTO usuarios(email,password) VALUES ($1,$2)'[email, password]);
    res.send('user created');
}
const login = async (req, res) => {
    res.render('login.html');
}
const signup = async (req, res) => {
    res.render('signup.html');
}
const doSignup = async (req, res) => {
    
    const resp = await pool.query("INSERT INTO usuarios(email,password) VALUES ('"+req.body.correo+"','"+req.body.password+"')");
    console.log(resp);
    const response = await pool.query('select * from peliculas limit 6');
    const response2 = await pool.query('select * from series limit 6');
    let listapeliculas = response.rows;
    let listaseries = response2.rows;
    res.render('index.html', {
        listapeliculas: listapeliculas,
        listaseries: listaseries
    });
}
const doLogin = async (req, res) => {

    const response = await pool.query("SELECT * FROM usuarios where email='" + req.body.correo + "' and password='" + req.body.password + "'");
    //return response;
    if (response.rows.length > 0) {
        const response = await pool.query('select * from peliculas limit 6');
        const response2 = await pool.query('select * from series limit 6');
        let listapeliculas = response.rows;
        let listaseries = response2.rows;
        res.render('index.html', {
            listapeliculas: listapeliculas,
            listaseries: listaseries
        });
    } else {
        console.log("Datos Incorrectos")
        res.render('login.html');
    }

}
const index = async (req, res) => {
    const response = await pool.query('select * from peliculas limit 6');
    const response2 = await pool.query('select * from series limit 6');
    let listapeliculas = response.rows;
    let listaseries = response2.rows;
    res.render('index.html', {
        listapeliculas: listapeliculas,
        listaseries: listaseries
    });
}
const detallepelicula = async (req, res) => {
    const { id } = req.params
    const response = await pool.query('SELECT * FROM peliculas where pelicula_id=' + id);
    let pelicula = response.rows;

    res.render('ver-pelicula.html', {
        pelicula: pelicula[0]
    });
}
const detalleserie = async (req, res) => {
    const { id } = req.params
    const response = await pool.query('SELECT * FROM series where serie_id=' + id);
    const response2 = await pool.query("select * from episodio where serie_id =" +id+"" );
    let serie = response.rows;
    let episodios = response2.rows;
    res.render('ver-serie.html', {
        serie: serie[0],
        episodios : episodios
    });
}
const seccionseries = async (req, res) => {
    const response = await pool.query('select * from series');
    let listaseries = response.rows;

    res.render('series.html', {
        listaseries: listaseries
    });
}
const seccionpeliculas = async (req, res) => {
    const response = await pool.query('SELECT * FROM peliculas');
    const response2 = await pool.query("select * from peliculas where categoria = 'Acción'");
    const response3 = await pool.query("select * from peliculas where categoria = 'Comedia'");
    const response4 = await pool.query("select * from peliculas where categoria = 'Ciencia Ficción'");
    const response5 = await pool.query("select * from peliculas where categoria = 'Animación'");
    let listapeliculas = response.rows;
    let listaaccion = response2.rows;
    let listacomedia = response3.rows;
    let listacienciaficcion = response4.rows;
    let listaanimacion = response5.rows;
    res.render('peliculas.html', {
        listapeliculas: listapeliculas,
        listaaccion: listaaccion,
        listacomedia: listacomedia,
        listacienciaficcion : listacienciaficcion,
        listaanimacion : listaanimacion
    });

}
const detalleepisodio = async(req,res)=>{
    const { id } = req.params
    const response2 = await pool.query("select * from episodio where episodio_id =" +id+"" );
    console.log(response2.rows);
    let episodio = response2.rows;
    res.render('ver-episodio.html', {
        episodio: episodio[0]
    });
}

module.exports = {
    getPeliculas,
    getUsuarios,
    createUsuarios,
    login,
    doLogin,
    index,
    detallepelicula,
    seccionpeliculas,
    seccionseries,
    signup,
    doSignup,
    detalleepisodio,
    detalleserie
}