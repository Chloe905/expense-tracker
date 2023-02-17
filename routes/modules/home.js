const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

// 定義首頁路由
router.get('/', async (req, res) => {
  try {
    const userId = req.user._id
    let totalAmount = 0
    const { category } = req.query

    const recordList =
      await Record.find({ userId })
        .lean()
        .sort({ date: 'desc' })
    const categoryList =
      await Category.find()
        .lean()
    let recordfilter = await recordList.filter(data => {
      return data.category === category
    })
    // 沒有輸入分類
    if (!category) {
      recordfilter = recordList
    }

    recordfilter.forEach((record) => {
      // 計算總額
      totalAmount += Number(record.amount)
      // 找出category的icon
      categoryList.forEach((e) => {
        if (record.category === e.name)
          return record.icon = e.icon
      })

    })

    res.render('index', { records: recordfilter, totalAmount, category })
  }

  catch (error) { console.error(error) }

})


module.exports = router