const mongoose = require('mongoose')
const Category = require('../category')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const SEED_CATEGORY = [
  {
    name: '家居物業',
    icon: 'fa-solid fa-house'
  },
  {
    name: '交通出行',
    icon: 'fa-solid fa-van-shuttle'
  },
  {
    name: '休閒娛樂',
    icon: 'fa-solid fa-face-grin-beam'
  },
  {
    name: '餐飲食品',
    icon: 'fa-solid fa-utensils'
  },
  {
    name: '其他',
    icon: 'fa-solid fa-pen'
  }
]

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.once('open', () => {
  Promise.all(
    SEED_CATEGORY.map(async (category) => {
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
    .catch(err => console.log(err))

})