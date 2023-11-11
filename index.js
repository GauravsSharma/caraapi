const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
const  apiData = require('./data.json');
const port = process.env.PORT||3000
app.get('/',(req,res)=>{
    res.send("Hello im live")

})
app.get("/service",()=>{
    res.send(apiData);
})
app.listen(port,()=>{
 console.log("Im live at port",port);
})