import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const App = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({type: "INCREMENT"});
    };
    const decrement = () => {
        dispatch({type: "DECREMENT"});
    };
    const reset = ()=> {
        dispatch({type: "RESET"});
    }
    return (
        <div className="App">
            <h1>
                Hello To Redux!
            </h1>
            <h3>Counter</h3>
            <h3>{counter}</h3>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default App