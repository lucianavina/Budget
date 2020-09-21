import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from '../Error/index'
import shortid from 'shortid'


const Form = ({saveEXpense, saveCreateExpense}) => {

    const[name, saveName] = useState('')
    const [quantity, saveQuantity] = useState(0)
    const [error, saveError] = useState(false)

    const addExpense = e => {
        e.preventDefault()

        //Validation
        if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
            saveError(true)
            return
        }

        saveError(false)

        //Build the expense

        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }

        console.log(expense)
        //send the expense to the principal component

        saveEXpense(expense)
        saveCreateExpense(true)
        
        //Erase the form
        saveName('')
        saveQuantity(0)


    }

    return ( 

        <form
            onSubmit={addExpense}
        >
            <h2>Agrega tus datos aquí</h2>

            {
                error ? <Error message = "Ambos campos son obligatorios o Presupuesto incorrecto" /> : null
            }
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej.Transporte"
                    value={name}
                    onChange={ e => saveName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej.300"
                    value={quantity}
                    onChange={ e => saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}
 

Form.propTypes = {
    saveEXpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired
}
export default Form;