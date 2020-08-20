const router = require('express').Router()
const { join } = require('path')

router.get('/tables', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'tables.html'))
})
router.get('/reservations', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'reservations.html'))
})


router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router