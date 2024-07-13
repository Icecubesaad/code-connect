const { Schema } = require("mongoose");

const commentSchema = new Schema({
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post",
        require:true
    },
    text:{
        type:Schema.Types.String
    },
    likes:{
        type:Schema.Types.Number
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    images:{
        type:Schema.Types.String,
    }
})