import React, { useState, useEffect } from 'react';


const initialFormValues = {
    title: '',
    description: '',
}

const Form = ({ todoAdd, todoEdit }) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit);
        }
    }, [todoEdit])

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        if (title.trim() === '') {
            setError('Debes indicar un título');
            return
        }
        if (description.trim() === '') {
            setError('Debes indicar una descripción')
        }
        console.log(formValues);
        todoAdd(formValues);
        setFormValues(initialFormValues);
        setSuccessMessage('Agregado con éxito');


        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000)
        setError(null);
    }

    return (
        <div>
            <h1>{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="form text-light">
                <input
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    value={title}
                    className="form-control bg-dark text-white"
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    cols="1"
                    placeholder="Description"
                    value={description}
                    className="form-control bg-dark text-white mt-2"
                    onChange={handleInputChange}
                />
                <input
                    type='submit'
                    className="btn btn-info mt-2"
                    value='Add'
                />
            </form>

            {
                error && (
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>
                )
            }

            {
                successMessage && (
                    <div className="alert alert-success mt-2">
                        {successMessage}
                    </div>
                )
            }


        </div>


    );
}

export default Form;
