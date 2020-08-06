// setup the data layer
// we need this to track the basket
import React, { createContext, useContext, useReducer } from 'react';

// this is the DATA LAYER
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it nside of a component
export const useStateValue = () => useContext(StateContext);