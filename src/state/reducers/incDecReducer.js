import { ADD, SUBTRACT } from '../actions/calcActions';

const incDecfunc = (state, action) => {
    switch (action.type) {
        case ADD:
          return { count: state.count + action.payload };
        case SUBTRACT:
          return { count: state.count - action.payload };
        default:
          throw new Error();
      }
  };
  
  export default incDecfunc;