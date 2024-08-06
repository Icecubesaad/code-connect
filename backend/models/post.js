const {Schema, default: mongoose} = require("mongoose");
const postSchema = new Schema({
  text: {
    type: String,
    require: true,
  },
  likes: {
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
  },
  tags:[
    {
      name:Schema.Types.String
    }
  ]
});
const Posts = mongoose.models.Post || mongoose.model("Post", postSchema);
module.exports= Posts;
