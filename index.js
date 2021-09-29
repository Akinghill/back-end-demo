// set up to only use dotenv contents in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');
const PORT = process.env.PORT;

//instead of body parser in order to read req.body
app.use(express.json());

//include routes
//now leads to index.js
app.use(routes);

//connect mongoose
mongoose.connect(process.env.DATABASE_URI || process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log('The mon(goose) is on the loose. #mrPipes'));

//connect server
app.listen(PORT, () => {
  console.log("Tiny electronic ears always listen on port " + PORT);
});