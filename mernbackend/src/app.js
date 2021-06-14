
const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");

const app = express();

require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");


const static_path = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("register")
});

// Create a new user in our database using post Method

app.post('/register', async (req, res) => {
    try {
        const password = req.body.psw;
        const cpassword = req.body.confirmpsw;
        if (password === cpassword) {

            const registerEmployee = new Register({
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname,
                gender: req.body.gender,
                countryCode: req.body.countryCode,
                phone: req.body.phone,
                email: req.body.email,
                psw: req.body.psw,
                confirmpsw: req.body.confirmpsw
            })

            const registered = await registerEmployee.save();
            res.status(201).render("register");

        } else {
            res.send("invalid data......")
        }

    } catch (error) {
        res.status(400).send(error);
    }

})

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
})