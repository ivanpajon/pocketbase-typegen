/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Base = "base",
	CustomAuth = "custom_auth",
	Everything = "everything",
	MyView = "my_view",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type BaseSystemCreateFields = {
	id?: RecordIdString
}

export type BaseSystemUpdateFields = never

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

export type AuthSystemCreateFields = {
	id?: RecordIdString
	email: string
	emailVisibility?: boolean
	password: string
	passwordConfirm: string
	verified?: boolean
}

export type AuthSystemUpdateFields = {
	email?: string
	emailVisibility?: boolean
	oldPassword?: string
	password?: string
	passwordConfirm?: string
	verified?: boolean
}

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type BaseRecord = {
	created?: IsoDateString
	field?: string
	id: string
	updated?: IsoDateString
}

export type CustomAuthRecord = {
	created?: IsoDateString
	custom_field?: string
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export enum EverythingSelectFieldOptions {
	"optionA" = "optionA",
	"OptionA" = "OptionA",
	"optionB" = "optionB",
	"optionC" = "optionC",
	"option with space" = "option with space",
	"sy?mb@!$" = "sy?mb@!$",
}
export type EverythingRecord<Tanother_json_field = unknown, Tjson_field = unknown> = {
	another_json_field?: null | Tanother_json_field
	bool_field?: boolean
	created?: IsoDateString
	custom_relation_field?: RecordIdString[]
	date_field?: IsoDateString
	email_field?: string
	file_field?: string
	id: string
	json_field?: null | Tjson_field
	number_field?: number
	post_relation_field?: RecordIdString
	rich_editor_field?: HTMLString
	select_field?: EverythingSelectFieldOptions
	select_field_no_values?: string
	text_field?: string
	three_files_field?: string[]
	updated?: IsoDateString
	url_field?: string
	user_relation_field?: RecordIdString
}

export type MyViewRecord<Tjson_field = unknown> = {
	id: string
	json_field?: null | Tjson_field
	post_relation_field?: RecordIdString
	text_field?: string
}

export type PostsRecord = {
	created?: IsoDateString
	field1?: number
	id: string
	nonempty_bool: boolean
	nonempty_field: string
	updated?: IsoDateString
}

export type UsersRecord = {
	avatar?: string
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

// Create types for each collection

export type SuperusersCreate = AuthSystemCreateFields

export type BaseCreate = {
	field?: string
} & BaseSystemCreateFields

export type CustomAuthCreate = {
	custom_field?: string
} & AuthSystemCreateFields

export type EverythingCreate<Tanother_json_field = unknown, Tjson_field = unknown> = {
	another_json_field?: null | Tanother_json_field
	bool_field?: boolean
	custom_relation_field?: RecordIdString[]
	date_field?: IsoDateString
	email_field?: string
	file_field?: File
	json_field?: null | Tjson_field
	number_field?: number
	post_relation_field?: RecordIdString
	rich_editor_field?: HTMLString
	select_field?: EverythingSelectFieldOptions
	select_field_no_values?: string
	text_field?: string
	three_files_field?: File[]
	url_field?: string
	user_relation_field?: RecordIdString
} & BaseSystemCreateFields

export type MyViewCreate<Tjson_field = unknown> = {
	json_field?: null | Tjson_field
	post_relation_field?: RecordIdString
	text_field?: string
} & BaseSystemCreateFields

export type PostsCreate = {
	field1?: number
	nonempty_bool: boolean
	nonempty_field: string
} & BaseSystemCreateFields

export type UsersCreate = {
	avatar?: File
	name?: string
} & AuthSystemCreateFields

// Update types for each collection

export type SuperusersUpdate = AuthSystemUpdateFields

export type BaseUpdate = {
	field?: string
} & BaseSystemUpdateFields

export type CustomAuthUpdate = {
	custom_field?: string
} & AuthSystemUpdateFields

export type EverythingUpdate<Tanother_json_field = unknown, Tjson_field = unknown> = {
	another_json_field?: null | Tanother_json_field
	bool_field?: boolean
	custom_relation_field?: RecordIdString[]
	date_field?: IsoDateString
	email_field?: string
	file_field?: File
	json_field?: null | Tjson_field
	number_field?: number
	post_relation_field?: RecordIdString
	rich_editor_field?: HTMLString
	select_field?: EverythingSelectFieldOptions
	select_field_no_values?: string
	text_field?: string
	three_files_field?: File[]
	url_field?: string
	user_relation_field?: RecordIdString
} & BaseSystemUpdateFields

export type MyViewUpdate<Tjson_field = unknown> = {
	json_field?: null | Tjson_field
	post_relation_field?: RecordIdString
	text_field?: string
} & BaseSystemUpdateFields

export type PostsUpdate = {
	field1?: number
	nonempty_bool?: boolean
	nonempty_field?: string
} & BaseSystemUpdateFields

export type UsersUpdate = {
	avatar?: File
	name?: string
} & AuthSystemUpdateFields

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type BaseResponse<Texpand = unknown> = Required<BaseRecord> & BaseSystemFields<Texpand>
export type CustomAuthResponse<Texpand = unknown> = Required<CustomAuthRecord> & AuthSystemFields<Texpand>
export type EverythingResponse<Tanother_json_field = unknown, Tjson_field = unknown, Texpand = unknown> = Required<EverythingRecord<Tanother_json_field, Tjson_field>> & BaseSystemFields<Texpand>
export type MyViewResponse<Tjson_field = unknown, Texpand = unknown> = Required<MyViewRecord<Tjson_field>> & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	base: BaseRecord
	custom_auth: CustomAuthRecord
	everything: EverythingRecord
	my_view: MyViewRecord
	posts: PostsRecord
	users: UsersRecord
}

export type CollectionCreates = {
	_superusers: SuperusersCreate
	base: BaseCreate
	custom_auth: CustomAuthCreate
	everything: EverythingCreate
	my_view: MyViewCreate
	posts: PostsCreate
	users: UsersCreate
}

export type CollectionUpdates = {
	_superusers: SuperusersUpdate
	base: BaseUpdate
	custom_auth: CustomAuthUpdate
	everything: EverythingUpdate
	my_view: MyViewUpdate
	posts: PostsUpdate
	users: UsersUpdate
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	base: BaseResponse
	custom_auth: CustomAuthResponse
	everything: EverythingResponse
	my_view: MyViewResponse
	posts: PostsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'base'): RecordService<BaseResponse>
	collection(idOrName: 'custom_auth'): RecordService<CustomAuthResponse>
	collection(idOrName: 'everything'): RecordService<EverythingResponse>
	collection(idOrName: 'my_view'): RecordService<MyViewResponse>
	collection(idOrName: 'posts'): RecordService<PostsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
