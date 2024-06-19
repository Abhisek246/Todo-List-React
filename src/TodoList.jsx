import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TodoList.css';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';


export default function TodoList({todos, updateTodo, addTodo, deleteTodo, markAllDone, markAsDoneOne, newTodo}){
    return(
        <div>
            <div className="container">
                <TextField id="outlined-basic" label="add your task" variant="outlined" onChange={updateTodo} value={newTodo}/>
                <Button variant="contained" onClick={addTodo} style={{marginLeft: "15px"}}>Add Task</Button>
            </div>
            
            <br></br>
            <hr></hr>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((el)=> (
                        <li key={el.id}>
                            <span style={el.isDone ? {textDecorationLine: "line-through"} : {}}><span className="task">{el.task}</span></span>
                            <Button variant="outlined" color="error" onClick={()=>deleteTodo(el.id)} style={{marginLeft: "15px"}}>Delete&nbsp;<DeleteIcon /></Button>
                            <Button variant="contained" color="success" onClick={()=>markAsDoneOne(el.id)} style={{marginLeft: "15px"}}>Mark as done&nbsp;<DoneIcon/></Button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <Button variant="outlined" size="large" onClick={markAllDone}>Mark All Done</Button>
        </div>
    );
}

    