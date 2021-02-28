import { useState, useEffect } from 'react'

export function usePokemonsData (url : string) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = () => {
    window.fetch(url)
      .then(res => res.json())
      .then(response => setPokemons(response.results))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    setLoading(true)
    fetchData();
  }, [url])
  return { pokemons, loading }
}
