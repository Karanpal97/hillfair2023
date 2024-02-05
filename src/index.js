const express = require("express");
const {connect} = require("./config/db");
const cors = require("cors");
require('dotenv').config();
const apiRoute=require("./routes")
const EventRout = require("./routes/Events");
const teamrouter = require("./routes/TeamRoutes")
const confRouter = require("./routes/confRoutes");
const swaggerUi = require("swagger-ui-express");
const spec = require ("./swagger/swagger.Json")



connect()
console.log("connected");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.use('/api-docs' , swaggerUi.serve,swaggerUi.setup(spec));
app.use('/api',apiRoute)
app.use("/event", EventRout);
app.use("/team", teamrouter);
app.use("/conf", confRouter);



const port = process.env.PORT;
console.log(port);



app.listen( port,  () =>{
  console.log(`Server is running on ${port}`);
})