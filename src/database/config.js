const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("url-base-datos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
