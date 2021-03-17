import React from 'react';

const Form = ({inputText, todos, setInputText, setTodos, setStatus}) => {
    // JavaScript fucntions and Handlers
     const inputTextHandler = (e) =>{
         console.log(e.target.value)
         setInputText(e.target.value)
     }
         
      const submitTodoHandler = (e) => {
          e.preventDefault(); 
          setTodos([
              ...todos, {text: inputText , completed: false , id: Math.random() * 10}
          ])
          setInputText("");
      }   

      const statusHandler = (e) => {
          setStatus(e.target.value);

      }
     
    return (
        <form>
        <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"></input>
        <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">ALL</option>
                <option value="completed">Completed</option>
                <option value="Incompleted">Not completed</option>

            </select>

        </div>
        </form>
    );

}
export default Form