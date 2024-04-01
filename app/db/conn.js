const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rahichauhan37:QfzOqAskIuKB0YMm@cluster0.judhvvw.mongodb.net/cyberHackthon", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`Connection successful`);
}).catch((error) => {
  console.log(`Error connecting to MongoDB: ${error}`);
});
