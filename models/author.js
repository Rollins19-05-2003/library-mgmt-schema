const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    birthDate: {
        type:Date,
        default:null
    }
}, {
    timestamps: true
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;