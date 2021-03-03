import { useState, useEffect } from 'react'

export function usePokemonsData (url : string) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await fetch(url)
      const data =  await response.json()
      setPokemons(data.results)
    }
    fetchData();
  }, [url])

  return { pokemons, loading }
}
