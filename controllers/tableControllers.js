const router = require('express').Router()
const tables = require('../db')

router.get('/tables', (req, res) => {
  res.json({
    status: 200,
    message: "Way to go!",
    data: tables
  })
})

router.post('/one_table', (req, res) => {
  let newTable = {
    name: req.body.name,
    date: req.body.date,
  }

  tables.push(newTable)

  res.sendStatus(200)
})


module.exports = router