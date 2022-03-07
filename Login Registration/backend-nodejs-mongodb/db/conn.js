const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userRegister", {
    //to remove warnings of deprecation
    /*useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true*/
    //no need to write because it by default
}).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
})
