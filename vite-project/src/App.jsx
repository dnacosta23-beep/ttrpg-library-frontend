import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [players, setPlayers] = useState('')

  const API_URL = import.meta.env.VITE_API_URL


  async function fetchGames() {
    try {
      const response = await fetch(`${API_URL}/games`)
      const data = await response.json()
      setGames(data)
    } catch (error) {
      console.error('Error fetching games:', error)
    }
  }


  useEffect(() => {
    fetchGames()
  }, [])


  async function handleSubmit(e) {
    e.preventDefault()

    const newGame = {
      title,
      genre,
      players,
    }

    try {
      await fetch(`${API_URL}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      })
      setTitle('')
      setGenre('')
      setPlayers('')
      
      fetchGames()
    } catch (error) {
      console.error('Error adding game:', error)
    }
  }

  return (
    <div className="app">
      <h1>TTRPG Library</h1>
      <p>Track your favorite tabletop RPG systems.</p>

      <form onSubmit={handleSubmit} className="game-form">

        <input
          type="text"
          placeholder="Game Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Players"
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
        />

        <button type="submit">
          Add Game
        </button>

      </form>

      <div className="game-list">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <h2>{game.title}</h2>

            <p>
              <strong>Genre:</strong> {game.genre}
            </p>

            <p>
              <strong>Players:</strong> {game.players}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
