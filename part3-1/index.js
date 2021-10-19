const express = require("express")
const app = express()

let { notes } = require("./db.json")

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/api/notes', (req, res) => {
    res.status(200).json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const { id } = req.params
    const note = notes.find(note => note.id === Number(id))
    res.status(200).json(note)
})

app.post('/api/notes', (req, res) => {
    const note  = req.body

    if (!note || !note.content) {
        return res.status(400).json({
            error: 'note.content is missing'
        })
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        date: new Date().toISOString(),
        important: typeof note.important !== 'undefined' ? note.important : false
    }

    notes = [...notes, newNote]

    res.status(201).json(newNote)
})

app.put('/api/notes/:id', (req, res) => {
    const { id } = req.params
    const { content, important }  = req.body

    notes = notes.filter(note => note.id !== Number(id))
    
    const note = {
        id: Number(id),
        content,
        date: new Date().toISOString(),
        important
    }

    notes = notes.concat(note)

    res.status(201).json(note)
})

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params
    notes = notes.filter(note => note.id !== Number(id))
    res.status(201).json(notes)
})

const PORT = 3001

app.listen(PORT, () => console.log("server listening on port 3001"))