export const EXPORT_COMMENT = `/**
* This file was @generated using pocketbase-typegen
*/`
export const IMPORTS = `import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'`
export const RECORD_TYPE_COMMENT = `// Record types for each collection`
export const RESPONSE_TYPE_COMMENT = `// Response types include system fields and match responses from the PocketBase API`
export const ALL_RECORD_RESPONSE_COMMENT = `// Types containing all Records and Responses, useful for creating typing helper functions`
export const TYPED_POCKETBASE_TYPE = `// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
\tcollection<T extends keyof CollectionResponses>(
\t\tidOrName: T
\t): RecordService<CollectionResponses[T]>
} & PocketBase`
export const EXPAND_GENERIC_NAME = "expand"
export const DATE_STRING_TYPE_NAME = `IsoDateString`
export const AUTODATE_STRING_TYPE_NAME = `IsoAutoDateString`
export const RECORD_ID_STRING_NAME = `RecordIdString`
export const HTML_STRING_NAME = `HTMLString`
export const ALIAS_TYPE_DEFINITIONS = `// Alias types for improved usability
export type ${DATE_STRING_TYPE_NAME} = string
export type ${AUTODATE_STRING_TYPE_NAME} = string & { readonly auto: unique symbol }
export type ${RECORD_ID_STRING_NAME} = string
export type ${HTML_STRING_NAME} = string`

export const BASE_SYSTEM_FIELDS_DEFINITION = `// System fields
export type BaseSystemFields<T = never> = {
\tid: ${RECORD_ID_STRING_NAME}
\tcollectionId: string
\tcollectionName: Collections
\texpand?: T
}`

export const AUTH_SYSTEM_FIELDS_DEFINITION = `export type AuthSystemFields<T = never> = {
\temail: string
\temailVisibility: boolean
\tusername: string
\tverified: boolean
} & BaseSystemFields<T>`

export const UTILITY_TYPES = `// Utility types for create/update operations

// Create type for Auth collections
export type CreateAuth<T> = {
\tid?: ${RECORD_ID_STRING_NAME}
\temail: string
\temailVisibility?: boolean
\tpassword: string
\tpasswordConfirm: string
\tverified?: boolean
} & Omit<{
\t[K in keyof T as T[K] extends IsoAutoDateString ? never : K]: T[K]
}, 'id'>

// Create type for Base collections
export type CreateBase<T> = {
\tid?: RecordIdString
} & Omit<{
\t[K in keyof T as T[K] extends IsoAutoDateString | (IsoAutoDateString | undefined) ? never : K]: T[K]
}, 'id'>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<Omit<T, keyof AuthSystemFields>> & {
\temail?: string
\temailVisibility?: boolean
\toldPassword?: string
\tpassword?: string
\tpasswordConfirm?: string
\tverified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<Omit<T, keyof BaseSystemFields>>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
\tCollectionResponses[T] extends AuthSystemFields
\t\t? CreateAuth<CollectionRecords[T]>
\t\t: CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
\tCollectionResponses[T] extends AuthSystemFields
\t\t? UpdateAuth<CollectionRecords[T]>
\t\t: UpdateBase<CollectionRecords[T]>`
