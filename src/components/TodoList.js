import React from 'react';
import Todo from './Todo';



const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) => {

    return (
        <div>
            {
                todos.length === 0
                    ? (
                        <div className='mt-2 alert alert-primary'>
                            No notes yet, write some
                        </div>
                    )
                    : (
                        todos.map((todo) => (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                todoDelete={todoDelete}
                                todoToggleCompleted={todoToggleCompleted}
                                setTodoEdit={setTodoEdit}
                            />
                        ))
                    )
            }
        </div>
    );
}

export default TodoList;