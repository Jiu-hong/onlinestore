import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var User1Schema = new Schema({
    username: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 100 },
    password: { type: String, required: true, maxlength: 100 },
    buyer: { type: Boolean, default: true },
});

//Export model
export default mongoose.models.User1 || mongoose.model('User1', User1Schema);
