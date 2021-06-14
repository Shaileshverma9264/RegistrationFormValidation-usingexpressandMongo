const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/StudentRegistrations", {
    // for deplication warning
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log('e--', e)
    console.log(`no connection`);
})