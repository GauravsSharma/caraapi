const express = require('express');
const cors = require('cors');

const app = express();
const apiData = require('./MOCK_DATA.json');
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello, I am live');
});

app.get('/cara/product', (req, res) => {
    return res.json(apiData);
});

app.listen(port, () => {
    console.log('I am live at port', port);
});
