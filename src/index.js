/* prettier ignore */

let express = require("express");
let path = require("path");
let app = express();

require("dotenv").config();

app
  .use(require("morgan")("dev"))
  .use(express.json())
  .use(require("cors")());

let port = process.env.EXPRESS_PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
