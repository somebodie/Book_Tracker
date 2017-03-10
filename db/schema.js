var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var BookSchema = new Schema({
        // isbn: Number,
        title: String,
        author: String,
        genre: String,
        read: String,
        keep: Boolean,
        away: {
          donate: String,
          sell: String
        }
});

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        first_name: String,
        last_name: String
    },
    password_digest: String,
    book: [{
        BookSchema
    }]
});

BookSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now
    }
    next()
});

UserSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now
    }
    next()
});

var UserModel = mongoose.model('User', UserSchema);
var BookModel = mongoose.model('Book', BookSchema)

module.exports = {
    User: UserModel,
    Book: BookModel
}
