import React, {useState, useEffect} from 'react';
import Question from './Components/Question/index'
import Form from './Components/Form/index'
import List from './Components/List/index'
import BudgetChecker from './Components/Buget-checker/index'

function App() {

  //define State

  const [budget, saveBudget] = useState(0)
  const [balance, saveBalance] = useState(0)
  const [showQuestion, updateQuestion] = useState(true)
  const [expenses, saveExpenses] = useState([])
  const [expense, saveEXpense] = useState({})
  const [createExpense, saveCreateExpense ] = useState(false)

  // useEffect tu update de balance

  useEffect(() => {

    if (createExpense) {

      //add new bugdet
       saveExpenses([
      ...expenses,
      expense
       ])
      
      //Substract from the updated budget

      const actualBalance = balance - expense.quantity
      saveBalance(actualBalance)
      
      // Set to false
      saveCreateExpense(false)
    }
   
    }, [expense, createExpense, expenses, balance])

 

  return (

    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          
{
            showQuestion ?
              (
                <Question
                  saveBudget={saveBudget}
                  saveBalance={saveBalance}
                  updateQuestion={updateQuestion} />
              ) : (
                <div className="row">
                 <div className="one-half column">
                    <Form
                      saveEXpense={saveEXpense}
                      saveCreateExpense={saveCreateExpense}
                    />
                </div>
                <div className="one-half column">
                    <List
                      expenses={expenses}
                      
                    />
                    <BudgetChecker
                      budget={budget}
                      balance={balance}
                    />
                </div>
                </div>
              )}

       
          
        </div>
        
      </header>
    </div>
    
  );
}

export default App;
