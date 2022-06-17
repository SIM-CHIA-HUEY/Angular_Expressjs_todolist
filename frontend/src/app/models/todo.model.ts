export interface TodoPayload {
    "_id": string,
    "content": string,
    "done": boolean
}

export interface TodoPayloadAddNew {
    "content": string,
    "done": boolean
}

export interface TodoPayloadUpdateStatus {
    "done": boolean
}

// 1 une interface d'origine : la base de ton application meme
