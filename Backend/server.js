const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const userRoute = require('./routes/userRoutes');
 const productRoute = require('./routes/productRoutes');

 const productAdminRoutes = require('./routes/productAdminRoutes')


const app = express();
app.use(express.json());
app.use(cors("*"));
dotenv.config();
const PORT =process.env.PORT || 3000;

// connect db
connectDB();

app.get("/", (req,res)=>{
    res.send("Welcome to eccomrce Api")
})

// Api route
app.use("/api/users", userRoute);
app.use("/api/products",productRoute);

 app.use("/api/admin/products",productAdminRoutes);

app.listen(PORT, ()=>{
    console.log(`server is listening ${PORT}`);
})