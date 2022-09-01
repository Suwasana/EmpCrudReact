const express = require('express');
const app = express();
const PORT = 3001;
const mysql = require("mysql");
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host :"localhost",
    password:"",
    database:"hr_management_system",
});

app.post("/create", (req,res) => {
    //console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query("INSERT INTO employee (name,age,address,position,salary) VALUES (?,?,?,?,?)",
     [name,age, address ,position,salary],
     (err,result)=>{
        if(err){
            console.log(err);
        }else {
            res.send("Value Inserted");
        }
     })
})

app.get("/employeeData" , (req,res)=>{
    db.query("SELECT * FROM employee" , (err,result)=> {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.listen(PORT , ()=> {
    console.log("I the server from port 3001");
})