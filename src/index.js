const express = require("express");
const cors = require("cors");
require("./helpers/exception.helper")(); // handle async error

const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routes/routes"));

app.use(require("./helpers/response.helper").errorHandler);
app.listen(80, () => console.log("Server started on port 80"));
