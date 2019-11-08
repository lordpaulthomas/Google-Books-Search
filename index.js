const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.PORT === "production") {
  app.use(expres.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-books", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`)
})