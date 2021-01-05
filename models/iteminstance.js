import mongoose from 'mongoose';
const { DateTime } = require('luxon'); //for date handling

var Schema = mongoose.Schema;

var ItemInstanceSchema = new Schema({
    item: { type: Schema.ObjectId, ref: 'Item', required: true }, // Reference to the associated item.
    user: { type: String, required: true }, // Reference to the associated user.
    //imprint: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ['Cart', 'Buy', 'Checkout'],
        default: 'Cart',
    },
    quantity: { type: Number, required: true },
    check: { type: Boolean, default: true },
    buy_date: { type: Date, default: Date.now() },
    ordernumber: { type: String },
    commenttext: { type: String },
    commentimage: [{ type: String }],
});

// Virtual for this iteminstance object's URL.
ItemInstanceSchema.virtual('url').get(function () {
    return '/auth/iteminstance/' + this._id;
});

ItemInstanceSchema.virtual('buy_date_formatted').get(function () {
    return DateTime.fromJSDate(this.buy_date).toLocaleString(DateTime.DATE_MED);
});

ItemInstanceSchema.virtual('buy_date_yyyy_mm_dd').get(function () {
    return DateTime.fromJSDate(this.buy_date).toISODate(); //format 'YYYY-MM-DD'
});

// Export model.
export default mongoose.models.ItemInstance ||
    mongoose.model('ItemInstance', ItemInstanceSchema);
