import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const initialTodos = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Desc del Todo #1',
        completed: true
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Desc del Todo #2',
        completed: false
    },
    {
        id: 3,
        title: 'Todo #3',
        description: 'Desc del Todo #3',
        completed: true
    }
];

const App = () => {

    const [todos, setTodos] = useState(initialTodos);
    const [todoEdit, setTodoEdit] = useState(null);

    const todoDelete = (todoId) => {
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToggleCompleted = (todoId) => {

        const changedTodos = todos.map(todo => todoId === todo.id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(changedTodos);
    }

    const todoAdd = (todo) => {

        const newTodo = {
            id: 48,
            ...todo,
            completed: false
        }
        const changedTodos = [
            ...todos,
            newTodo
        ]

        console.log('newTodo: ', newTodo);
        console.log('changedTodos: ', changedTodos);

        setTodos(changedTodos)
    }
    return (
        <section className='container mt-5 '>

            <div className='flex-column mt-3 d-flex align-items-center'>
                <div className='col-8'>
                    < TodoForm
                        todoAdd={todoAdd}
                        todoEdit={todoEdit}
                    />
                </div>
                <div className='col-8'>

                    < TodoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToggleCompleted={todoToggleCompleted}
                        setTodoEdit={setTodoEdit}
                    />

                </div>
            </div>
        </section>
    );
}


export default App;