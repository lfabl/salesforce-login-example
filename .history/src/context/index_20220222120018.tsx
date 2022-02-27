import React, {
    createContext,
    useReducer,
    FC
} from 'react';
import {
    GLOBAL_STATE_STORE
} from '../constants';
import {
    GlobalStateReducerType,
    GlobalStateType
} from '../types';

const GlobalStateContext = createContext(GLOBAL_STATE_STORE);
const GlobalStateDispatchContext = createContext(undefined);

const GlobalStateProvider: FC = ({
    children
}) => {
    const [globalState, setGlobalState] = useReducer(
        (state: GlobalStateType, newState: GlobalStateReducerType) => ({
            ...state,
            ...newState
        }),
        GLOBAL_STATE_STORE
    );

    return <GlobalStateContext.Provider
        value={globalState}
    >
        <GlobalStateDispatchContext.Provider
            value={setGlobalState}
        >
            {children}
        </GlobalStateDispatchContext.Provider>
    </GlobalStateContext.Provider>;
};
export default GlobalStateProvider;