const mongoose = require('mongoose')
const Record = require('../record') // 載入 record model
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

const RECORD = [
  {
    name: '午餐',
    date: '2019.04.23',
    amount: 60,
    categoryId: 
  },
  {
    name: '晚餐',
    date: '2019.04.23',
    amount: 60,
    categoryId: 
  },
]
db.once('open', () => {
  console.log('mongodb connected!')
  Record.create({

  })

})
  .then(() => {
    console.log('create recordSeeds done.')
    process.exit()
  })