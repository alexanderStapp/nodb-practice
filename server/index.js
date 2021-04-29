const express = require('express')

const app = express()
const PORT = 3030

const mc = require('./controllers/movieController')

app.use(express.json)

app.get('/api/movies', mc.getMovies)
app.post('/api/movies', mc.addMovie)
app.delete('/api/movies/:id', mc.deleteMovie)
app.put('/api/movies/:id', mc.editMovie)


app.listen(PORT, () => console.log(`server is running on ${PORT}`))