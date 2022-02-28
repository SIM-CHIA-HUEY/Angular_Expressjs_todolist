const mongoose = require("mongoose")

const schema = mongoose.Schema({
    content: String,
    done: Boolean
})

module.exports = mongoose.model("Todo", schema)
