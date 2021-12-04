import { useEffect, useState } from "react";
import { getTransaction, addTodos, deleteTodo, updateTodo } from "../api/apiUtilies"


const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState();


    function todoVal(event) {
        setAddTodo(event.target.value);
    }

    function createTodo() {
    
        addTodos(addTodo)
    }

    function deleteTodos(id) {
        console.log(id)
        deleteTodo(id)
    }

    function updateTodos(id) {
        let updateTODO = prompt("Enter update todo.");
        updateTodo(id,updateTODO)
    }

    useEffect(() => {
        getTransaction()
            .then((data) => setTodo(data));
    },[createTodo]);
    return (
        <div className="main-todo-div">
            <div >
                <p className="todo-head flex-todo">Todo</p>
                <div className="flex-todo distance">
                    <input type="text" placeholder="Add todo" onChange={todoVal} />
                    <button className="add" onClick={createTodo}>Add</button>
                    <button className="all">delete all</button>
                </div>
            </div>
            {
                todo.map((v, i) => {
                    return (
                        <div className="task-div" key={i}>
                            <p>{v.task}</p>
                            <div>
                                <button className="btn mr" onClick={() => updateTodos(v._id)}>update</button>
                                <button className="btn ml" onClick={()=>deleteTodos(v._id)}>delete</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Todo;