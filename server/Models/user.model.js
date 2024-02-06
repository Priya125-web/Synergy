import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    profilePicture: {
        type: String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fdefault-avatar-profile-icon-vector-18942381&psig=AOvVaw068ibswKHE-8MYbI59hQKn&ust=1707325558751000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCbqryZl4QDFQAAAAAdAAAAABAE"
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true }
)

const User = mongoose.model('User', userSchema);

export default User;