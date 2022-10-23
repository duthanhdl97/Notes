import { format } from 'date-fns'

export const isDebugging = process.env.NODE_ENV !== 'production' || process.env.DEBUGGING

const getPrefix = (level: string, category: string) => {
  return `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')} [${level}] ${category}`
}

const logger = () => {
  return {
    getLogger(category: string) {
      return {
        debug: isDebugging ? (message?: any, ...optionalParams: any[]) => {
          console.debug(getPrefix('DEBUG', category), message, ...optionalParams)
        } : (_message?: any, ..._optionalParams: any[]) => {
          //
        },
        info: (message?: any, ...optionalParams: any[]) => {
          console.info(getPrefix('INFO', category), message, ...optionalParams)
        },
        warn: (message?: any, ...optionalParams: any[]) => {
          console.warn(getPrefix('WARN', category), message, ...optionalParams)
        },
        error: (message?: any, ...optionalParams: any[]) => {
          console.error(getPrefix('ERROR', category), message, ...optionalParams)
        },
      }
    },
  }
}

export const getLogger = logger().getLogger

export default getLogger('app')
