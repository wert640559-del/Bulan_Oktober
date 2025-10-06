import { useState } from "react";

export default function TodoList(){
    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e) => {
        e.preventDefault();                  // kalau refresh, ga reload baru
        if (newTodo.trim() === '') return; // kalau kosong berhenti aja, ga usah lanjut

        const newTodoItem = {
            id: Date.now(),  // buat angka acak dari tanggal
            text: newTodo, 
            completed: false
        }
        setTodos(prevtodos => [...prevtodos, newTodoItem]);
        setNewTodo('');
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }))
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', height: '100vh', justifyContent: 'start', padding: '100px 0'}}>
            <h1>Todo List</h1>
            <form action="" onSubmit={addTodo}>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="tambahkan Todo list..." style={{padding: '10px', borderRadius: '5px', border: '1px solid gray', width: '400px'}}/>
                <button type="submit" style={{marginLeft: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Tambahkan</button>
            </form>
            <ul style={{listStyleType: 'none', padding: '0',}}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ marginBottom: '10px', gap: '10px', width: '400px', display: 'flex', flexDirection: 'row'}}>
                        <span>{todo.completed ? '🟢' : '🔴'}</span>
                        <span onClick={() => toggleTodo(todo.id)} style={{cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} style={{marginLeft: 'auto', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

