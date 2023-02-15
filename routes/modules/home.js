const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

// 定義首頁路由
router.get('/', async (req, res) => {
  try {
    let totalAmount = 0
    const recordList =
      await Record.find()
        .lean()
        .sort({ date: 'desc' })
    const categoryList =
      await Category.find()
        .lean()

    recordList.forEach((record) => {
      // 計算總額
      totalAmount += Number(record.amount)
      // 找出category的icon
      categoryList.forEach((e) => {
        if (record.category === e.name)
          return record.icon = e.icon
      })

    })

    res.render('index', { records: recordList, totalAmount })
  }

  catch (error) { console.error(error) }

})

module.exports = router