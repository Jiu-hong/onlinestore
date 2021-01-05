// no need
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    ordernumber: {
        type: String,
        required: true,
    },
    itemInstances: [
        {
            type: Schema.ObjectId,
            ref: 'ItemInstance',
            required: true,
        },
    ], // Reference to the associated itemInstance.
    user: { type: String, required: true }, // Reference to the associated user.
    buy_date: { type: Date, default: Date.now() },
});

// Export model.
export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
