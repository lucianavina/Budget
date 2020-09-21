import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from '../Error/index'

const Question = ({saveBudget, saveBalance, updateQuestion}) => {

    //defining state

    const [quantity, saveQuantity] = useState(0)

    const [error, saveError] = useState(false)

    //Budget's function

    const setBudget = e => {
        saveQuantity(parseInt(e.target.value, 10))
        
    }

    // Submit for setBudget
    const addBudget = e => {
        e.preventDefault()

        //Validation

        if (quantity < 1 || isNaN(quantity)) {
            saveError(true);
            return
        }
        saveError(false)
        saveBudget(quantity)
        saveBalance(quantity)
        updateQuestion(false)
    }

    




    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error message="El presupuesto es incorrecto"/> : null}
            <form
            onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={setBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    );
}
 
Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveBalance: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}

export default Question;