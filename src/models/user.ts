import Sequelize from 'sequelize'
import DataTypes from 'sequelize/lib/data-types'
import { generateUlid } from '../utils/ulid'

export type IUser = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions)
  associate(models: { [key: string]: String }): void
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

export default (SequelizeClass: Sequelize.Sequelize, dataTypes: DataTypes): IUser => {
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
  ) as IUser

  User.associate = () => {
    // associate
  }

  return User
}
