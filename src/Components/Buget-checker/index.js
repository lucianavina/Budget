import React from 'react';
import PropTypes from 'prop-types'

import { checkBalance } from '../../Helper/index'


const BudgetChecker = ({budget, balance}) => {
    return ( 
        <>
            <div className="alert alert-primary">
                Presupuesto: ${budget}

            </div>
            <div className={checkBalance(budget, balance)}>
                Restante: ${balance}

            </div>
            </>
     );
}

BudgetChecker.propTypes = {
    budget: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
 
export default BudgetChecker;