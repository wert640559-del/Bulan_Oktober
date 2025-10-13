import { useReducer } from "react"

function CounterReducer(state, action){
    switch (action.type) {
        case "increment": 
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset" :
            return {count: 0}
        case "kali" :
            return {count: state.count * 2}
        default:
            throw new Error()
    }
}

export default function CounterWithReducer(){
    const [counterState, dispatch]  = useReducer(CounterReducer, {count: 0})

    return (
        <div>
            <h1></h1>

            <p>Count: {counterState.count}</p>

            <div>
                <button
                 onClick={() => dispatch({type: "increment"})}
                >Tambah</button>
                <button
                 onClick={() => dispatch({type: "decrement"})}
                >Kurang</button>
                <button
                 onClick={() => dispatch({type: "reset"})}
                >Reset</button>
                <button
                 onClick={() => dispatch({type: "kali"})}
                >kali 2</button>
            </div>
        </div>
    )
}