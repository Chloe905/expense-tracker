const mongoose = require('mongoose') // 載入 mongoose
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI) // 設定連線到 mongoDB
// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db