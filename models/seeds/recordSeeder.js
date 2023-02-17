const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
const Record = require('../record') // 載入 record model
const User = require('../user')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const SEED_USER = {
  name: '廣志',
  email: 'root@example.com',
  password: '12345678'
}
const SEED_RECORD = [
  {
    name: '午餐',
    date: '2019-04-23',
    category: '餐飲食品',
    amount: 60,

  },
  {
    name: '晚餐',
    date: '2019-04-23',
    category: '餐飲食品',
    amount: 60
  },
  {
    name: '捷運',
    date: '2019-04-23',
    category: '交通出行',
    amount: 120
  },
  {
    name: '電影:驚奇隊長',
    date: '2019-04-23',
    category: '休閒娛樂',
    amount: 220
  },
  {
    name: '租金',
    date: '2015-04-01',
    category: '家居物業',
    amount: 25000
  }
]
db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(
        SEED_RECORD.map(async (record) => {
          const { name, date, amount, category } = record
          await Record.create({
            name,
            date,
            amount,
            category,
            userId
          })
        }))
    })

    .then(() => {
      console.log('create recordSeeds done.')
      process.exit()
    })
    .catch(err => console.log(err))
})


