export function reducer (state, action) {
    switch (action.type){
        case "SET_QUESTIONS":
            state.questions = action.payload.questions;
            return {...state};
        case "SET_SCORE":
            if (action.payload.isTrue)
                state.score = state.score + 1;
            return {...state};
        default:
            return state;
    }
}