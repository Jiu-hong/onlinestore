import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    title: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: [{ type: String }],
    introduction: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
});

// Virtual for item's URL
ItemSchema.virtual('url').get(function () {
    return '/item/' + this._id;
});

//Export model
export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
