const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowingSchema = new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    issueDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true,
        default: () => {
            const date = new Date();
            date.setDate(date.getDate() + 15);
            return date;
        }
    },
    returnDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Borrowed', 'Returned', 'Overdue'],
        default: 'Borrowed'
    },
    fine: {
        amount: {
            type: Number,
            default: 0
        },
        paid: {
            type: Boolean,
            default: false
        }
    }
}, {
    timestamps: true
});

const Borrowing = mongoose.model("Borrowing", borrowingSchema);
module.exports = Borrowing;