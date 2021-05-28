
var mongoose = require('mongoose');

/**
 * Profile Schema.
 * 
 * The profile details of an Okami Account.
 * 
 * @property about: brief background of the user.
 * @property bio: motto of the user.
 * @property followers: the amount of followers the user has.
 * @property games: array of the game titles the user has played.
 */
var ProfileSchema = new mongoose.Schema({
    about: String,
    bio: String,
    followers: Number,
    games: [{type: String, default: null}]
});

/**
 * Okami Schema.
 * 
 * The account schema.
 * 
 * @property okamid: unique id of the user.
 * @property name: first name and last name of the user in object form.
 * @property email: the email of the user.
 * @property password: password of the user.
 * @property profile: Profile Schema containing the profile of the user.
 */
var OkamiSchema = new mongoose.Schema({
    okamid: {type: String},
    name: {
        first: {type: String, required: true},
        last: {type: String, trim: true, required: true},
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: ProfileSchema,
});

const Profile = mongoose.model('Profile', ProfileSchema);
const Okami = mongoose.model('Okami', OkamiSchema);

module.exports = {
    Profile: Profile,
    Okami: Okami
}
