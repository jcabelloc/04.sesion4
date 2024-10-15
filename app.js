const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const tiendaRoutes = require('./routes/tienda')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.routes);
app.use(tiendaRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>PAGINA NO ENCONTRADA</h1>');
    console.log('Viendo que URL el usuario inhresa pero no existe')
    console.log(req.url);
    next();
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);