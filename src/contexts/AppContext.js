/* eslint-disable no-console */
/**
 * @name AppContext
 */

import React, { createContext, useEffect, useReducer } from "react";

const AppContext = createContext();

// Context ACTIONS
export const ACTIONS = {
    ON_LOAD: "ON_LOAD"
};

// Context Initial State
const initialState = Object.freeze({
    loaded: false,
});

// Context Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ON_LOAD:
            return {...state, loaded: true}
        default:
            return state
    }
};


// Context Provider
AppContext.Provider = (Provider => props => {
    const { children } = props || {}

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (!state.loaded) {
            dispatch({
                type: ACTIONS.ON_LOAD
            })
        }
    }, [state.loaded])


    return <Provider value={{ ...state, dispatch }}>
        {children}
    </Provider>
})(AppContext.Provider);

export default AppContext