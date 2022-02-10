import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) => {
    return (
        <div className="">
            <h1>Soy TodoList</h1>
            {
                todos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToggleCompleted={todoToggleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                ))
            }
        </div>
    );
}

export default TodoList;