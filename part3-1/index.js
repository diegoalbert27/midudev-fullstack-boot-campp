const express = require("express")
const app = express()
const morgan = require("morgan")

const phonebook = require("./routes/phonebook.routes")
const notes = require("./routes/notes.routes")

let { persons } = require("./db.json")

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/phonebook', phonebook)
app.use('/api/notes', notes)

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/info', (req, res) => {
    const date = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
})

const PORT = 3001

app.listen(PORT, () => console.log("server listening on port 3001"))