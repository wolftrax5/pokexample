import { useState, useEffect } from 'react'

export function usePokemonsData () {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      .then(res => res.json())
      .then(response => setPokemons(response.results))
      .finally(() => setLoading(false))
  }, [])
  return { pokemons, loading }
}
