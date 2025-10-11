import { useEffect, useState } from "react"

export default function AsyncAwaitInEffect(){
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.state}`)
                }
                const data = await response.json()
                setTodos(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchTodos()
    }, [])

    if (loading) <p>Memuat data pengguna...</p>
    if (error) <p>Terjadi kesalahan: {error.message}</p>

    return (
        <div>
            <h2>Daftar tugas</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}