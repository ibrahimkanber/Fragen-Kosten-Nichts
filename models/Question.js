const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const slugify=require("slugify")

const QuestionSchema=new Schema({
    title:{
        type: String,
        required: [true,"Please provide a title"],
        minlength:[5,"Please provide a title at least 5 characters"],
       
    },
    content:{
        type: String,
        required:[true,"Please provide a content"],
        minlength:[5,"Please provide a content at least 5 characters"],
    },
    slug:String,

    createdAt:{
        type: Date,
        default:Date.now()

    },
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User"
    },
    likeCount:{

    },

   likes:[{
       type:mongoose.Schema.ObjectId,
       ref:"User"
   }],

   answerCount:{
        type:Number,
        default:0
   },

   answers:[
       {
           type:mongoose.Schema.ObjectId,
           ref:"Answer"
       }
   ]
    

})

QuestionSchema.pre("save",function(next){
    if(!this.isModified("title")){
        next()
    }
    this.slug=this.createSlug()
    next()

})

QuestionSchema.methods.createSlug=function(){
    return slugify(this.title, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: /[*+~.()'"!:@?{}]/g, // remove characters that match regex, defaults to `undefined`
        lower: true,      // convert to lower case, defaults to `false`

      })
}


module.exports = mongoose.model("Question",QuestionSchema)