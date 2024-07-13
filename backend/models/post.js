const {Schema, default: mongoose} = require("mongoose");
const postSchema = new Schema({
  Text: {
    type: String,
    require: true,
  },
  Likes: {
    type: Number,
    default:0
  },
  images: [
    {
      type:Schema.Types.String,
    }
  ],
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  totalComments:{
    type:Schema.Types.Number,
    default:0
  }
});
const Posts = mongoose.models.Post || mongoose.model("Post", postSchema);
module.exports= Posts;
