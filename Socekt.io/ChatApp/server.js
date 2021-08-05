const express = require("express");
const cors = require('cors');
const app = express();


const server = app.listen(8000, () => {
    console.log("Listening at Port 8000")
});

const io = require('socket.io') (server,{cors:true});

io.on("connection",socket=>{

    socket.on("message",({name,message})=>{
        io.emit("message",{name,message})
    })
    
   

    
});