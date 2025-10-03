import Comment from './components/comment.jsx'
import './App.css'

function App() {
  const commentData = {
    date: new Date(),
    text: 'Selamat belajar React!',
    author: {
      name: 'Muhammad Harits',
      avatarUrl: 'profil.png',
    },
  };

  return (
    <div>
      <Comment 
        author={{name: 'Harits', avatarUrl: 'profil.png'}}
        text='Seorang yang sedang belajar react, pada tanggal:'
        date={new Date()}
        />

    </div>
  )
}

export default App
