const express = require('express')
const app = express()
app.use(express.json())

//mongoose for interacting with mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projectman', { useNewUrlParser: true, family: 4 })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.error('Could not connect to MongoDB... ', error));



app.get('/', (req, res) => {
    res.send("jarel je karel")
})


app.listen(8000, () => {console.log('listening on port 8000')})