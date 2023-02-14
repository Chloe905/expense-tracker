const mongoose = require('mongoose')
const Category = require('../category')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const CATEGORY = [
  {
    name: '家居物業',
    icon: '<i class="fa-solid fa-house"></i>'
  },
  {
    name: '交通出行',
    icon: '<i class="fa-solid fa-van-shuttle"></i>'
  },
  {
    name: '休閒娛樂',
    icon: '<i class="fa-solid fa-face-grin-beam"></i>'
  },
  {
    name: '餐飲食品',
    icon: '<i class="fa-solid fa-utensils"></i>'
  },
  {
    name: '其他',
    icon: '<i class="fa-solid fa-pen"></i>'
  }
]

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.once('open', () => {
  Promise.all(
    CATEGORY.map(async (category) => {
      await Category.create({
        name: category.name,
        icon: category.icon
      })
    })
  )
    .then(() => {
      console.log('create categorySeeds done')
      process.exit()
    })
    .catch(err => console.log('err'))

})