export const checkBalance = (budget, balance) => {
    let color
        
        if( (budget / 4) > balance) {
            color = "alert alert-danger"
        } else if ((budget / 2) > balance) {
            color= "alert alert-warning"
        } else {
            color= "alert alert-success"
        }
    return color
}