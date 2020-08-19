const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const { json } = require('express')


// GET tables
router.get('/tables', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {console.log(err) }
        res.json(JSON.parse(data))
    })
})


// POST tables
router.post('/tables', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }
        let tables = JSON.parse(data)
        tables.push(req.body)
        fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(tables), err => {
            if (err) { console.log(err) }
            res.json(tables)
        })
    })
})


// PUT tables
// router.put('/tables/:id', (req, res) => {
//     fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
//         if (err) { console.log(err) }
//         let tables = JSON.parse(data)

//     })
// })


// DELETE tables
router.delete('/tables/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }
        let tables = JSON.parse(data)
        tables = tables.filter(table => table.id !== req.params.id)

        fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(tables), err => {
            if (err) { console.log(err) }
            res.sendStatus(200)
        })
    })
})


module.exports = router