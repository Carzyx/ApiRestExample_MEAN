'use strict'

const app = require('./app'),
mongoose = require('mongoose'),
config = require('./config');


// Connection to DB
mongoose.connect(config.db)
.then(() => console.log('Conexión a la base de datos establecida...'))
.catch(err => console.log(`Error al conectar a la base de datos: ${err}`));


app.listen(3000, () => {
    console.log(`Node server running on http://localhost:${config.port}`)  
  });