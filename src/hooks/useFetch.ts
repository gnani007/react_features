import { useEffect, useState } from 'react'

type User = {
  firstname: string,
  email: string,
  birthdate: string
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const result = await fetch(url);
        const data = await result.json();
        setData(data)
      } catch (error) {
        setError(error as null)
      } finally {
        setLoading(false)
      }
    };
    fetchData()
  }, [url])

  return { data, loading, error }
}