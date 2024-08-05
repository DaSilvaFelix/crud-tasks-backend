const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.listen(3000 , ()=>{
    console.log('servidor ejecutandoce en el puerto 3000');
})