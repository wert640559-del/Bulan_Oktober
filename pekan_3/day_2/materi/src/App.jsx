import React, { useState, useEffect } from 'react';
import './App.css';

// Custom Hook untuk fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Effect dijalankan ulang jika URL berubah

  return { data, loading, error }; // Mengembalikan state
}

// Komponen yang menggunakan Custom Hook useFetch
function PostViewer({ postId }) {
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <p>Memuat postingan...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (!post) return <p>Postingan tidak ditemukan.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

function App() {
  const [currentPostId, setCurrentPostId] = useState(1);

  return (
    <div>
      <h2>Contoh Hooks Composition (useFetch)</h2>
      <PostViewer postId={currentPostId} />
      <button onClick={() => setCurrentPostId(prevId => prevId + 1)}>
        Lihat Postingan Berikutnya
      </button>
    </div>
  );
}

export default App;