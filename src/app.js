const express = require("express");
const app = express();
require("../src/db/connection");
const router = require("./routers/men");


const PORT = process.env.port || 4000;
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`The App is Live on port ${PORT} 🚀`);
});
