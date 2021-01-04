import mongoose from 'mongoose';
const { DateTime } = require('luxon');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, maxlength: 100 },
  password: { type: String, required: true, maxlength: 100 },
  owner: { type: Boolean, default: true },
  date_of_join: { type: Date, default: DateTime.local() },
  //??DateTime.local().toFormat('yyyy LLL dd') getFullYear()
});

// Virtual for owner's full name
OwnerSchema.virtual('name').get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for owner's joinlength ????
OwnerSchema.virtual('joinDate').get(function () {
  /*(month = "" + (date_of_join.getMonth() + 1)),
    (day = "" + date_of_join.getDate()),
    (year = date_of_join.getFullYear());*/
  var joinlength = '';
  joinlength = DateTime.fromJSDate(this.date_of_join).toISODate(); //format 'YYYY-MM-DD'
  return joinlength;
  //return [year, month, day].join("-");
});

// Virtual for owner's URL
OwnerSchema.virtual('url').get(function () {
  return '/owner/' + this._id;
});

//Export model

export default mongoose.models.OwnerInstance ||
  mongoose.model('OwnerInstance', OwnerInstanceSchema);
