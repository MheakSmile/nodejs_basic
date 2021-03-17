import fetch from "node-fetch"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

let array =[]
export const Login = (req,res) => {
    //const {username,password} = req.query
    //localhost->8080/api/v1/users/login/mheak/5555
    //const {username,password} = req.params
    const {username,password} = req.body
    res.json({
        username,
        password
    })
}

export const Users = async(req,res) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await data.json()
    const {id} = req.params
    const {msg} = req.body
    const value = json.filter((user) => user.id == id)
    res.json({
    msg,
     data : value,
    })
}

export const Register = (req,res) => {
    const {username} = req.body
    array.push(username)
    res.json({        
        username,        
    })
}

export const Search = (req,res) => {
    const {username} = req.params
    const data = array.filter((name) => name == username)
    res.json({
        username : data,
    })
}

export default { Login, Users,Register,Search }