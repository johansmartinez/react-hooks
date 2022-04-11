let initialState={
    favorites:[]
};

const reducerObject=(state, action)=>({
    'ADD':{
        ...state,
        favorites:action.payload
    }
});

const reducer=(state, action) => {
    if (reducerObject(state,action)[action.type]) {
        return reducerObject(state,action)[action.type]
    } else {
        return state
    }
};

export {reducer, initialState};