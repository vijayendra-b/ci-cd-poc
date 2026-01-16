const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello CI/CD POC 3 on 16th Jan 2025 for the Demo'));

app.listen(3000, () => console.log('App running on port 3000'));
