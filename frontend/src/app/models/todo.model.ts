export interface TodoPayload {
    "_id": number,
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

export interface TodoPayloadUpdateTitle {
    "title": string
}

export interface TodoPayloadUpdateContent {
    "content": string
}