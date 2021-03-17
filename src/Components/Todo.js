import React from 'react'; 

const Todo = ({text, todos, setTodos, todo}) => {

//Handlers
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))

    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed : !item.completed,
                };
            }
            return item;

        })
        );
    }; 
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text} </li>

            <button onClick={completeHandler}class="complete-btn"> 
            <i class="fas fa-check"></i></button>

            <button onClick={deleteHandler} class="trash-btn">
            <i className="fas fa-trash"></i>
            </button>


        </div>
    );
}

export default Todo