var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var BookSchema = new Schema({
        title: String,
        author: String,
        genre: String,
        read: String,
        keep: Boolean
});


BookSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now
    }
    next()
});

var BookModel = mongoose.model('Book', BookSchema)

module.exports = {Book: BookModel}
