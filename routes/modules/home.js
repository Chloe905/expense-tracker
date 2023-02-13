const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

// 定義首頁路由
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})


module.exports = router