const customerService = require('../services/customerService')

const findAll = async (req, res) => {
  try {
    const results = await customerService.findAll()
    res.status(200).json(results)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const findOne = async (req, res) => {
  const { id } = req.params
  try {
    const result = await customerService.findOne(id)
    if (!result) {
      res.status(404).send(`No customer found with id ${id}`)
    } else {
      res.status(200).json({
        message: 'Success',
        result,
      })
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const create = async (req, res) => {
  const datas = req.body
  if (
    datas.firstName &&
    datas.lastName &&
    datas.birthdate &&
    datas.telNum &&
    datas.email
  ) {
    try {
      const result = await customerService.create(datas)
      res.status(201).json({
        message: 'Created',
        result,
      })
    } catch (err) {
      res.status(500).send(err.message)
    }
  } else {
    res.status(400).send('Missing datas')
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const datas = req.body
  try {
    await customerService.update(id, datas)
    res.status(201).send("Customer's datas updated")
  } catch (err) {
    if (err.kind === 'ObjectId') {
      res.status(404).send(`No customer found with id ${id}`)
    } else {
      res.status(500).send(err.message)
    }
  }
}

const delOne = async (req, res) => {
  const { id } = req.params
  try {
    await customerService.delOne(id)
    res.sendStatus(204)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  delOne,
}
