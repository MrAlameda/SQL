import { Users} from "../model"
import { usersdatabase } from "./users.db"

const uuid=require("uuid")

export const getUserById=(_id:string)=>{
    return usersdatabase.find(({id})=>id==_id)
}

export const createUser=({first_name,last_name,email,birthday,password}:Users)=>{
    const newUser:Users={
        id:uuid.v4(),
        first_name,
        last_name,
        email,
        password,
         birthday,
    }
    usersdatabase.push(newUser)
    return usersdatabase
}

export const getAllUsers=()=>{
    return usersdatabase
}

