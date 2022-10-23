import fs from 'fs'
import Sequelize from 'sequelize'
import path from 'path'
import * as config from '../config/config'

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'

const sequelizeConfig = config[env]

const models: any = {}
const sequelize = new Sequelize.Sequelize(
  config.database,
  config.username,
  config.password,
  sequelizeConfig
)

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.js' || file.slice(-3) === '.ts')
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(
      sequelize,
      Sequelize.DataTypes
    )
    models[model.name] = model
  })

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
