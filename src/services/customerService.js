const CustomerModel = require('../models/customerModel')

const findAll = () => {
  return CustomerModel.find()
}

const findOne = (id) => {
  return CustomerModel.findById(id)
}

const create = (datas) => {
  const customer = new CustomerModel({
    firstName: datas.firstName,
    lastName: datas.lastName,
    birthDate: datas.birthDate,
    telNum: datas.telNum,
    email: datas.email,
  })
  return customer.save().then((result) => {
    return result
  })
}

const update = (id, datas) => {
  return CustomerModel.findByIdAndUpdate(
    id,
    datas,
    { useFindAndModify: false },
    (results) => {
      return results
    }
  )
}

const delOne = (id) => {
  return CustomerModel.deleteOne({ _id: id }, (results) => results)
}

module.exports = { findAll, findOne, create, update, delOne }
