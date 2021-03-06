const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4');

//Inicializar
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/image/uploads'),
  filename: (req, file, cb, filename) => {
      cb(null, uuid() + path.extname(file.originalname));
  }
});

app.use(multer({
  storage: storage
}).single('image'));

//Variables globales

//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
