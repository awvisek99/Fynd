const express = require ("express");
const userService = require("./userService");
const app= express();

app.use(express.json());

app.get("./users", async (request, response)=>{
try{
const users = await userService.getUserDat(); // if there is dependency: thread safety
response.status(200).json(users); // users==null?
}
catch (error){
console.error(error);
}
});

app.listen(3000);