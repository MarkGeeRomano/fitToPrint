const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const subscriptions = [`ESPN`, `Hacker News`, `Bloomberg`, `New York Times`, `Axios`];

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true  },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    zip: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    subscriptions: { type: Array, default: subscriptions },
    savedArticles: [{ type: Schema.Types.ObjectId, ref: 'Archive' }]
});

const SALT_WORK_FACTOR = 10;

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);