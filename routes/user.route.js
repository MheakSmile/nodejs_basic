import express from "express"
import {Login,Users,Register,Search} from "../controllers/user.controller.js"
const user_route = express.Router()

user_route.post("/login",(req,res)=>Login(req,res))
//user_route.get("/:id",(req,res)=>Users(req,res))
user_route.post("/Register",(req,res)=>Register(req,res))
user_route.get("/",(req,res)=>Users(req,res))
user_route.post("/Search/:username",(req,res)=>Search(req,res))



export default user_route