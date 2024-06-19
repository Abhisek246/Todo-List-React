import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

export default function TodoApp(){
    let [todos, setTodos]= useState([{task: "Sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodo = (event) =>{
        setNewTodo(event.target.value);
    };

    let addTodo = () =>{
        setTodos((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4(), isDone: false}]
    });
        setNewTodo("");
    };

    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> prevTodos.filter((prevTodo)=> prevTodo.id != id));
    };

    let markAllDone = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            return {...todo, isDone: true};
        }));
    };


    let markAsDoneOne = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {...todo, isDone:true};
                    
                }else{
                    return todo;
                }
        }));
    }

    return (
        <TodoList todos={todos} newTodo={newTodo} updateTodo={updateTodo} addTodo={addTodo} deleteTodo={deleteTodo} markAllDone={markAllDone} markAsDoneOne={markAsDoneOne }/>
    );
};