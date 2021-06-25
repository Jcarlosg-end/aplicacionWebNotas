const {Router} = require('express');
const router = Router();
const fs = require("fs")

const json_n_notes = fs.readFileSync('src/nota.json','utf-8');
const note = JSON.parse(json_n_notes);

router.get('/', (req,res) => {
    res.render('index.ejs', {
        note
    })
})

router.get('/new-entry', (req,res) => {
    res.render('new-entry');
})

router.post('/new-entry', (req,res) =>{
    const {title, description, date, weight, color, priority} = req.body;
    if (!title || !description || !date || !weight || !color || !priority) {
        res.status(400).send('forworld');
        return;
    } 

    let newNote = {
        title, 
        description, 
        date, weight, 
        color, 
        priority
    }

    note.push(newNote);

    const json_notas =  JSON.stringify(note)
    fs.writeFileSync('src/notas.json', json_notas, 'utf-8')

    res.redirect('/');
})

module.exports = router