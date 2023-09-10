const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});