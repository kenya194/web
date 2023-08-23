export default(state, action) => {
    switch(action.type){
        
        // the action here, refering to the global state thus its dispatch components we had the actions( type and payload id)
        
        // the action type is Delete transaction and the action .payload id filters the unique transaction to be deleted

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                    // this add the new transactions to the previous ones
                }
        default:
            return state;
    }
}