const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    bookID:{
        type:String,
        required:true,
        unique:true
    },
    authors:[{
        type:Schema.Types.ObjectId,
        ref:"Author",
        required:true
    }],
    quantity:{
        type:Number,
        required:true,
        min:0
    },
    availableQuantity: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['Available', 'Out of Stock'],
        default: 'Available'
    }
}, {
    timestamps: true
});

const Book =  mongoose.model("Book",bookSchema);

module.exports = Book;