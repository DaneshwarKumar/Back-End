import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const userSchema = mongoose.Schema({
    name: String,
    mobile: String,
    gmail: String,
    course:String
});


autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'studentRecord');


const user = mongoose.model('studentRecord',userSchema);

export default user;