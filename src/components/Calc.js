import React, { useReducer } from "react";
import reducer from '../state/reducers/incDecReducer';
import actions from "../state/actions/calcActions";
import "../styles.css";

export function Calc() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    const incClick = () => {
        dispatch(actions.addAction(1));
    };

    return (
        <div className="App">
            <textarea rows="1" value={state.count} id="total" name="ans" readOnly />
            <br />
            <button type="button" className="btn" onClick={incClick}>
                + 1
            </button>
            <button type="button" className="btn" onClick={() => dispatch(actions.addAction(3))}>
                + 3
            </button>
            <button type="button" className="btn" onClick={() => dispatch(actions.subtractAction(3))}>
                - 3
            </button>
        </div>
    );
}
