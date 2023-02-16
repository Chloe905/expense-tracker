const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const handlebarsHelpers = require('./helpers/handlebars-helper')

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const router = require('./routes')
require('./config/mongoose')
const app = express()


app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs', helpers: handlebarsHelpers }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(router)
// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})