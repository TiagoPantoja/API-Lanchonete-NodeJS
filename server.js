const express = require('express');
const app = express();
const port = 3000;

const api = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', api);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});