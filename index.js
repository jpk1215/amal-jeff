const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(port, () => {
    console.log(`app listening at port:${port}`)
})