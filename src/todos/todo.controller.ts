import { db } from "../model"
import { tododdatabase } from "./todo.db"

const uuid=require("uuid")

export const getTodoById=(_id:string)=>{
    return tododdatabase.find(({id})=>id==_id)
}

export const createTodo=(name:string)=>{
    const newTodo:db={
        id:uuid.v4(),
        name,
        complete:false
    }
    tododdatabase.push(newTodo)
    return tododdatabase
}

export const getAllTodos=()=>{
    return tododdatabase
}

