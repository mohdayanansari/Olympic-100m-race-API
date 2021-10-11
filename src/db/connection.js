const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection is Successfull !!");
}).catch((e) => {
    console.log(`Connection Error ${e}`);
})