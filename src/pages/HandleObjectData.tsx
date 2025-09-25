import {useState} from 'react'
import {data} from '../mockData/cityDetails'

interface CityDetails {
    humidity: string;
    windSpeed: string;
    temperature: string;
}

const HandleObjectData = () => {
    const [cityName, setCityName] = useState(Object.keys(data)[0])
    const [selectedCityDetails, setSelectedCityDetails] = useState<CityDetails>(data[cityName])

    const cityDetails = (city: string) => {
        setSelectedCityDetails(data[city])
        setCityName(city)
    }

    return (
        <div>
            <h3>Handle Object data</h3>
            <div className='city-list'>
                <ul>
                    {Object.keys(data).map((city) => {
                        return <li onClick={() => cityDetails(city)}>{city}</li>
                    })}
                </ul>
            </div>
            <div className='city-details'>
                <p>City name: {cityName}</p>
                <p>humidity: {selectedCityDetails.humidity}</p>
                <p>windSpeed: {selectedCityDetails.windSpeed}</p>
                <p>temperature: {selectedCityDetails.temperature}</p>
            </div>
        </div>
    )
}

export default HandleObjectData