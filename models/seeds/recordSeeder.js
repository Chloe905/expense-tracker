const mongoose = require('mongoose')
const Record = require('../record') // 載入 record model
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Record.create({
    name: '午餐',
    date: '2019.04.23',
    amount: 60
  })
  console.log('done')
})