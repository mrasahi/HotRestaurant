const router = require('express').Router()
const fs = require('fs')
const { join } = require('path')
// const uuid = require('uuid')


// GET all items
router.get('/tables', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }
    console.log(data)
    res.json(JSON.parse(data))
  })
})



// POST one item
router.post('/tables', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }
    let tables = JSON.parse(data)
    
    tables.push(req.body)
    fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(tables), err => {
      if (err) { console.log(err) }
    })
    res.json(req.body)
  })
})

// PUT one item
// router.put('/items/:text', (req, res) => {
//   fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
//     if (err) { console.log(err) }

//     let items = JSON.parse(data)

//     for (i = 0; i < items.length; i++) {
//       if (items[i].text === req.params.text) {
//         items[i].isDone = req.body.isDone
//       }
//     }
//     fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(items), err => {
//       if (err) { console.log(err) }
//       res.sendStatus(200)
//     })

//   })

// })

// // DELETE one item
// router.delete('/tables/:id', (req, res) => {

//   fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
//     if (err) { console.log(err) }

//     let items = JSON.parse(data)
//     items = items.filter(item => item.id !== req.params.id)


//     fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(items), err => {
//       if (err) { console.log(err) }
//     })
//     // console.log(items)
//     // send ok status code
//     res.sendStatus(200)
//   })
// })

module.exports = router