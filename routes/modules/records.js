const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', async (req, res) => {
  await Category.find()
    .lean()
    .then(categories => {
      res.render('new', { categories })
    })

})

router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, date, category, amount } = req.body
  return Record.create({ name, date, category, amount, userId })
    .then(() => res.redirect('/'))
    .catch((error) => { console.log(error) })
})

router.get('/:id/edit', async (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const categories = await Category.find()
    .lean()

  await Record.findOne({ _id, userId })
    .lean()
    .then((record) => res.render('edit', { record, categories }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOneAndUpdate({ _id, userId }, req.body, {
    new: true
  })
    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
