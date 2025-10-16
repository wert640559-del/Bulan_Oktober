import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function PostView() {
    const [id, setId] = useState(1)
    const { data: post, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (loading) return <p>Memuat Postingan</p>
    if (error) return <p>Terjadi Kesalahan</p>
    if (!post) return <p>Tidak ada data.</p>

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => setId(prev => prev + 1)}>
                Lihat postingan berikutnya
            </button>
        </div>
    )
}