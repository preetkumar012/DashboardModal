const express = require("express");
require("./db/config");
const Product = require("./db/Product");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.post("/admin", async (req, resp) => {
 
    console.log(req.body);
    if(req.body.password && req.body.email){
        const data = await Product.findOne(req.body).select("-password");
        if (data) {
            resp.send(data);
            console.log(data);
    
        } else {
            resp.send({ Result: "Result not found" });
        }

    }else{
        resp.send({email:"Record is missing"})
    }
   

   
})
app.listen(5000, () => {
    console.log("port running at 5000");
})