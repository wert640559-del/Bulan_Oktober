import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { decrement, increment, incrementByValue } from "../features/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => dispatch(increment())}>Tambah</button>
            <button onClick={() => dispatch(decrement())}>Kurang</button>
            <button onClick={() => dispatch(incrementByValue(10))}>Tambah 10</button>
        </div>
    )
}

