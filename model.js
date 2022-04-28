const mongoose = require("mongoose");

const channelSchema = mongoose.Schema({
  name: String,
  channels: Array,
});

const model = mongoose.model("Channel", channelSchema);

module.exports = model;
