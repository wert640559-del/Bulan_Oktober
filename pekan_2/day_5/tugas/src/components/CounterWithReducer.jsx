import { useReducer } from "react";

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment" : 
            return {count: state.count + 1}
        case "decrement" :
            return {count: state.count - 1}
        case "reset" : 
            return {count: 0}
        default:
            throw new Error();
    }
} 

export default function CounterWithReducer() {
    const [counterState, dispatch] = useReducer(counterReducer, { count: 0 })

    return (
        <div>
            <h2>Counter dengan useReducer</h2>
            <p>Count: {counterState.count}</p>
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Kurang</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}