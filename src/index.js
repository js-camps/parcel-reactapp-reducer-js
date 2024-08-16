import { createRoot } from "react-dom/client";
import Calc from "./components/Calc";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './state/reducers'; 

const store = createStore(rootReducer);

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );

function App() {
    return (<Calc />)
}