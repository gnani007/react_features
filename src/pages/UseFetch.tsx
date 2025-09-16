import { useFetch } from '../hooks/useFetch'
import { useCalculator } from "../hooks/useCalculation"

const UseFetch = () => {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users")
  const { value, addition } = useCalculator()

  return (
    <div className='use-fetch-container'>
      <h3>UseFetch page</h3>
      <p>value: {value}</p>
      <div>
        <button onClick={() => addition(10, 10)}>Add</button>
      </div>

      <div className='user-data'>
        {loading ? <p>Loading...</p> :
          data && data.map((item) => {
            return <div className='user-details'>
              <div>{item.firstname}</div>
              <div>{item.email}</div>
              <div>{item.birthdate}</div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default UseFetch