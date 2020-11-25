export default (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payroll)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payroll,...state.transactions]
            }
        default:
            return state;
    }
}