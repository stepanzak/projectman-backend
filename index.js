const express = require('express')
const app = express()
app.use(express.json())



app.get('/', (req, res) => {
    res.send("jarel je karel")
})


app.listen(8000, () => {console.log('listening on port 8000')})