const { Schema, model} = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        unique: true
    },
},
{timestamps: true}
);

module.exports = model("User", UserSchema);