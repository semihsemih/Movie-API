const mongoose = require('mongoose');
const Schmea = mongoose.Schema;

const DirectorSchema = new Schmea({
  name: String,
  surname: String,
  bio: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('director', DirectorSchema);
