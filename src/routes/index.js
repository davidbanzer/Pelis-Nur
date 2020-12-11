const { Router } = require('express');
const router = Router();

const{getPeliculas, getUsuarios,createUsuarios,login,index,detallepelicula,seccionpeliculas,seccionseries,doLogin,signup,doSignup,detalleserie,detalleepisodio} = require ('../controllers/index.controller')
router.get('/peliculas', getPeliculas);
router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuarios);
router.get('/',login);
router.post('/login',doLogin);
router.get('/index',index);
router.get('/detalle-pelicula/:id',detallepelicula);
router.get('/seccion-peliculas',seccionpeliculas);
router.get('/seccion-series',seccionseries);
router.get('/signup',signup);
router.post('/signup',doSignup);
router.get('/detalle-serie/:id',detalleserie);
router.get('/detalle-episodio/:id',detalleepisodio);
module.exports = router;