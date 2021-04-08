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


export function useFetchPokemonEnpoint (endpoint: any, inaitialResponse={}) {
  const [response, setResponse] = useState(inaitialResponse)
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true)
    try {
      const response = await endpoint()
      setResponse(response)

    } catch (error) {
      console.error('UPS in useFetchPokemonEnpoint', error)
    } finally{
      setLoading(false)
    }
  }
 

  return { response, loading, fetchData}

}
