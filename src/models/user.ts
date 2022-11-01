import Sequelize from 'sequelize'
import DataTypes from 'sequelize/lib/data-types'
import { generateUlid } from '../utils/ulid'

export interface IUserAttributes {
  id: string
  name: string
  email: string
  password: string
  created_at: Date 
}

export interface IUserInstance extends Sequelize.Model<IUserAttributes>, IUserAttributes {}

export type IUserModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): IUserInstance
  associate(models: { [key: string]: string }): void
}

export function getUlidDataType(dataTypes: DataTypes) {
  return {
    allowNull: false,
    defaultValue: () => generateUlid(),
    primaryKey: true,
    type: dataTypes.STRING(26),
    validate: {
      len: [26, 26] as [number, number],
    },
  }
}

export default (SequelizeClass: Sequelize.Sequelize, dataTypes: DataTypes) => {
  const User = SequelizeClass.define(
    'User',
    {
      id: getUlidDataType(dataTypes),
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
    },
    {
      underscored: true,
      updatedAt: false,
    },
  ) as IUserModel

  User.associate = (models) => {
    // associate
  }

  return User
}
