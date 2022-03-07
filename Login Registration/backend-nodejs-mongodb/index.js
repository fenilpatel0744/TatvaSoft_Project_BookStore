const express = require('express');
require('./db/conn');
const Register = require("./models/schema");

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get("/", (req,res) => {
    res.send("hello");
})
app.post("/login", (req, res) => {
    res.send("login");
});

app.post("/register", (req,res) => {
    const {firstname, lastname, email, password, confirmPassword} = req.body;
    if(!firstname || !lastname || !email || !password || !confirmPassword){
        return res.status(422).json({error: "Please fill the fields properly"});
    }
    Register.findOne({email: email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({error: "Email already exists"});
        }
        const user = new Register({firstname, lastname, email, password, confirmPassword});
        user.save().then(() => {
            res.status(201).json({message: "Successfully registered"});
        }).catch((err) => res.status(500).json({error: "Failed to register"}));
    }).catch(err => {console.log(err);});
});

app.post('/', async (req,res) => {
    try{
        let token;
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "Please fill the data"});
        }
        const userLogin = await Register.findOne({email:email});
        
        if(userLogin){
            res.status(201).json({message: "Login Success"});
        }
        else{
            res.status(400).json({error: "Invalid Credentials"});
        }
    } 
    catch(err){
        console.log(err);
    }
});


app.listen(8000, () => {
    console.log("App is running on port 8000");
});
