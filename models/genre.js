import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

// Virtual for this genre instance URL.
GenreSchema.virtual('url').get(function () {
  return '/genre/' + this._id;
});

// Export model.
export default mongoose.models.Genre || mongoose.model('Genre', GenreSchema);
