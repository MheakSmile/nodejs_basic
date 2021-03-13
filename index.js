import express from "express";
import user_route from "./routes/user.route.js"
import bodyParser from "body-parser"
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api/v1/users", user_route);

app.listen(PORT,() => {
    console.log(`server Started at port ${PORT}`)
})