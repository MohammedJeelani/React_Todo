import React from 'react'
import Todo from './Todo'
function TodoList({todos,setTodos, filterTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filterTodos.map((todo) => (
                        <Todo text={todo.text} todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
                    ))
                }
            </ul>
            
        </div>
    )
}

export default TodoList
