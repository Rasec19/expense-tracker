export default ( state, action ) => {
    switch ( action.type ) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                trasactions: [...state.trasactions, action.payload]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                trasactions: state.trasactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            }
    
        default:
            return state;
    }
}