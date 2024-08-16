import { ADD, SUBTRACT } from '../actions/calcActions';

const initialState = { count: 0 };

const incDecfunc = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { count: state.count + action.payload };
        case SUBTRACT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

export default incDecfunc;
