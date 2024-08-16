import React from 'react';
import { connect } from 'react-redux';
import actions from "../state/actions/calcActions";
import "../styles.css";

function Calc({ count, addAction, subtractAction }) {
    return (
        <div className="App">
            <textarea rows="1" value={count} id="total" name="ans" readOnly />
            <br />
            <button type="button" className="btn" onClick={() => addAction(1)}>
                + 1
            </button>
            <button type="button" className="btn" onClick={() => addAction(3)}>
                + 3
            </button>
            <button type="button" className="btn" onClick={() => subtractAction(3)}>
                - 3
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  addAction: actions.addAction,
  subtractAction: actions.subtractAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
