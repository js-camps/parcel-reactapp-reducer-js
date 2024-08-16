#

```
/reactapp
├── src 
│  ├── components
│  │    └── Calc.js
│  ├── state
│  │    ├── actions
│  │    │    └── calcActions.js
│  │    └── reducers
│  │         └── incdecReducer.js
│  ├── index.js
│  └── styles.css
├── .gitignore 
├── index.html 
├── package-lock.json 
├── package.json 
└── Readme.md
```

`src/components/Calc.js`
```js
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

```

`src/state/actions/calcActions.js`
```js
export const ADD = "ADD"
export const SUBTRACT = "SUBTRACT"


let addAction = (value) => {
    return { type: ADD, payload: value }
}
let subtractAction = (value) => {
  return { type: SUBTRACT, payload: value }
}


export default {
    addAction: addAction,
    subtractAction: subtractAction
}
```

`src/state/reducers/incdecReducer.js`
```js
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
```

`src/state/index.js`
```js
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
```

`src/state/styles.css`
```js

```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React: state reducer redux</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
      rel="stylesheet"
    />
    <script type="module" src="./src/index.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

`package.json`
```json
{
  "scripts": {
    "start": "parcel index.html"
  },
  "devDependencies": {
    "parcel": "^2.12.0",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```