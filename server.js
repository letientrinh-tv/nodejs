const express = require('express');
// XÓA dòng này: const { console } = require('inspector');
const configViewEngine = require('./src/config/viewEngine');
const webRouter = require('./src/routes/web');
const connection = require('./src/config/database');


require('dotenv').config();
const app = express()
const port = 3000


// config reciept data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


configViewEngine(app)

//khai bao router
app.use('/', webRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})