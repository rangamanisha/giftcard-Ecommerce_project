import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { getuseractiveAction } from "../actions/useractive.actions";

export const USERACTIVE_INITIAL_STATE = {
    email: null,
    default: false,
    verified: false,
    status: null,
    code: null,
    message: null,
    errors: []
}


export const USERACTIVE_FEATURE_KEY = 'useractive';
export const useractiveAdapter = createEntityAdapter();
export const initialUserActiveState = useractiveAdapter.getInitialState(USERACTIVE_INITIAL_STATE);


export const useractiveSlice = createSlice({
    name: USERACTIVE_FEATURE_KEY,
    initialState: USERACTIVE_INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getuseractiveAction.pending, (state, action) => {
            state.default = true;
            state.verified = true;
        })
        .addCase(getuseractiveAction.fulfilled, (state, action) => {
            const response = action.payload;
            debugger;
            if(response.code === 200) {
                state.default = true;
                state.verified = true;
            }
        })
        .addCase(getuseractiveAction.rejected, (state, action) => {
            state.default = true;
        })
    }
});


export const useractiveReducer = useractiveSlice.reducer;
export const useractiveActions = useractiveSlice.actions;
export const { selectAll, selectEntities} = useractiveAdapter.getSelectors();
export const getUserActiveState = (rootState) => rootState[USERACTIVE_FEATURE_KEY];
export const selectAllUserActive = createSelector(getUserActiveState, selectAll);
export const selectUserActiveEntities = createSelector(getUserActiveState, selectEntities);

