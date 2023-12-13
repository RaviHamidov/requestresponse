const express = require('express');
const app = express();

const users = [
    {id: 1, cardNumber: "4564 4564 5464 4564"},
    {id: 2, cardNumber: "4564 4564 5464 4565"},
    {id: 3, cardNumber: "4564 4564 5464 4566"},
    {id: 4, cardNumber: "4564 4564 5464 4567"},
    {id: 5, cardNumber: "4564 4564 5464 4568"}
]
app.get('/', (req,res)=>{
    res.send("home page")
})
app.get('/users', (req,res)=>{
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
const selectedUser = users.find(user => user.id == userID);
if(selectedUser){

    res.send(selectedUser)
}else{
    res.status(404).send("istifadeci yoxdur")
}
})

app.listen(3000, ()=>{
    console.log("server quruldu");
})
  