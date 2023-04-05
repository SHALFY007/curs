const defaultState = {
    favourite: []
}

export const favouriteReducer = (state=defaultState, action) => {
    switch (action.type) {
        case "ADD_FAVOURITE":
            return {...state, favourite: [...state.favourite, action.payload]}

        case "REMOVE_FAVOURITE":
            return {...state, favourite: [...state.favourite.filter(function(el) { return el.id != action.payload })]}
    
        default:
            return defaultState
    }
}