const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'projects')));

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`listening on port ${PORT}}`));
