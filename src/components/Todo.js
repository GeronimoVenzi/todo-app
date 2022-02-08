import React from 'react';

const Todo = ({ todo, todoDelete }) => {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title">
                    {todo.title}
                    <button className="btn btn-sm btn-success m-1">
                        Terminar
                    </button>
                </h3>
                <p className="card-text">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-primary m-1">
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger m-1"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;