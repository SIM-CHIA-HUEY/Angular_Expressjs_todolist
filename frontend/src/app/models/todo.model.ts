// export interface TodoPayload {
//     "_id": string,
//     "content": string,
//     "done": boolean
// }

export interface TodoPayload {
    "_id": string,
    "title": string,
    "content": string,
    "isDone": boolean
}

export interface TodoPayloadAddNew {
    "title": string,
    "content": string,
    "isDone": boolean
}

export interface TodoPayloadUpdateStatus {
    "isDone": boolean
}

export interface TodoPayloadUpdateContent {
    "content": string
}

// 1 une interface d'origine : la base de ton application meme
