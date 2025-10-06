import React, {useState} from 'react'

export default function Counter(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const kali = () => {
        setCount(prevCount => prevCount * 2)
    }

    const bagi = () => {
        setCount(prevCount => prevCount / 2)
    }

    const hapusSemua = () => {
        setCount(prevCount => prevCount * 0)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
        <input type="text" value={count} />
        <button onClick={increment}>tambah 1</button>
        <button onClick={decrement}>kurangi 1</button>
        <button onClick={kali}>kali 2</button>
        <button onClick={bagi}>bagi 2</button>
        <button onClick={hapusSemua}>hapus</button>
        </div>
    )
}