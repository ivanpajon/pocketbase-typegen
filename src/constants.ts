export const EXPORT_COMMENT = `/**
* This file was @generated using pocketbase-typegen
*/`
export const IMPORTS = `import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'`
export const RECORD_TYPE_COMMENT = `// Record types for each collection`
export const CREATE_TYPE_COMMENT = `// Create types for each collection`
export const UPDATE_TYPE_COMMENT = `// Update types for each collection`
export const RESPONSE_TYPE_COMMENT = `// Response types include system fields and match responses from the PocketBase API`
export const ALL_RECORD_RESPONSE_COMMENT = `// Types containing all Records and Responses, useful for creating typing helper functions`
export const TYPED_POCKETBASE_COMMENT = `// Type for usage with type asserted PocketBase instance\n// https://github.com/pocketbase/js-sdk#specify-typescript-definitions`
export const EXPAND_GENERIC_NAME = "expand"
export const DATE_STRING_TYPE_NAME = `IsoDateString`
export const RECORD_ID_STRING_NAME = `RecordIdString`
export const HTML_STRING_NAME = `HTMLString`
export const ALIAS_TYPE_DEFINITIONS = `// Alias types for improved usability
export type ${DATE_STRING_TYPE_NAME} = string
export type ${RECORD_ID_STRING_NAME} = string
export type ${HTML_STRING_NAME} = string
export type Nullable<T> = T | null | ''`
export const NOT_COMMON_COLLECTIONS = ['_authOrigins', '_externalAuths', '_mfas', '_otps']

export const BASE_SYSTEM_FIELDS_DEFINITION = `// System fields
export type BaseSystemFields<T = never> = {
\tid: ${RECORD_ID_STRING_NAME}
\tcollectionId: string
\tcollectionName: Collections
\texpand?: T
}`

export const BASE_SYSTEM_CREATE_FIELDS_DEFINITION = `export type BaseSystemCreateFields = {
\tid?: ${RECORD_ID_STRING_NAME}
}`

export const BASE_SYSTEM_UPDATE_FIELDS_DEFINITION = `export type BaseSystemUpdateFields = unknown`

export const AUTH_SYSTEM_FIELDS_DEFINITION = `export type AuthSystemFields<T = never> = {
\temail: string
\temailVisibility: boolean
\tusername: string
\tverified: boolean
} & BaseSystemFields<T>`

export const AUTH_SYSTEM_CREATE_FIELDS_DEFINITION = `export type AuthSystemCreateFields = {
\tid?: ${RECORD_ID_STRING_NAME}
\temail: string
\temailVisibility?: boolean
\tpassword: string
\tpasswordConfirm: string
\tverified?: boolean
}`

export const AUTH_SYSTEM_UPDATE_FIELDS_DEFINITION = `export type AuthSystemUpdateFields = {
\temail?: string
\temailVisibility?: boolean
\toldPassword?: string
\tpassword?: string
\tpasswordConfirm?: string
\tverified?: boolean
}`
