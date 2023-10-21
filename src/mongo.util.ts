import { DEFAULT_MONGO_CONNECTION_NAME } from './mongo.constants'

/**
 * Get a token for the MongoClient object for the given connection name
 * @param connectionName The unique name for the connection
 */
export function getClientToken(connectionName: string = DEFAULT_MONGO_CONNECTION_NAME) {
    return `___${toSnackCase(connectionName).toUpperCase()}_CLIENT___`
}

/**
 * Get a token for the Mongo Db object for the given connection name
 * @param connectionName The unique name for the connection
 */
export function getDbToken(connectionName: string = DEFAULT_MONGO_CONNECTION_NAME) {
    return `___${toSnackCase(connectionName).toUpperCase()}_DATABASE___`
}

/**
 * Get a token for the Mongo Db object for the given connection name
 * @param collectionName The unique name for the collection
 */
export function getCollectionToken(collectionName: string) {
    return `___${toSnackCase(collectionName).toUpperCase()}_COLLECTION___`
}

function toSnackCase (str: string) : string {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2')
}
