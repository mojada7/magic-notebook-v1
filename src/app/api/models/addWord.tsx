import { model, models, Schema } from "mongoose";

const wordSchema = new Schema({
word : {type:String, required : true, unique : true, match : /[a-zA-Z]*/},
meaning : {type:String, required : true, match : /[a-zA-Z]*/},
difficulty : {type:Number, required : true},
})


const RU = models.RU || model('RU', wordSchema)

export default RU