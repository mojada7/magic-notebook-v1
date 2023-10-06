import { model, models, Schema } from "mongoose";

const wordSchema = new Schema({
name : {type:String, required : true, unique : true, match : /[a-zA-Z]*/},
email : {type:String, required : true, match : /[a-zA-Z0-9]*@[a-zA-Z]*.com/},
data : {type:Object, required : true},
})


const UU = models.UU || model('UU', wordSchema)

export default UU