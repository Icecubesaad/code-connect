const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  profilePicture: {
    type: Schema.Types.String,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  bio: {
    type: Schema.Types.String,
    default: null,
  },
  banner: {
    type: Schema.Types.String,
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      default: [],
    },
  ],
  likeList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      default: [],
    },
  ],
  commentList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      default: [],
    },
  ],
  followers: {
    type: Schema.Types.Number,
    default: 0,
  },
  following: {
    type: Schema.Types.Number,
    default: 0,
  },
  followerList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  followingList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  totalPosts: {
    type: Schema.Types.Number,
    default: 0,
  },
  newNotifications: {
    type: Schema.Types.Number,
    default: 0,
  },
  notifications: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      action: {
        type: Schema.Types.String,
        required: true,
      },
      actionOn: {
        type: Schema.Types.ObjectId,
        refPath: "onModel",
        required: true,
      },
      onModel: {
        type: String,
        required: true,
        enum: ["User", "Comment"],
      },
    },
  ],
  totalLikes: {
    type: Schema.Types.Number,
    default: 0,
  },
  refreshToken: {
    type: Schema.Types.String,
  },
  refreshTokenExpiry: {
    type: Schema.Types.Date,
  },
});

const Users = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = Users;
