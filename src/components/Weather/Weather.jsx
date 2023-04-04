import './Weather.css'
import { Input, Button } from '@mui/material';
import { useEffect, useState } from 'react';


function Weather() {

    const [city, setCity] = useState('Москва')
    const [value, setValue] = useState({})
    const [img, setImg] = useState('//cdn.weatherapi.com/weather/64x64/night/116.png')
    const [text, setText] = useState('Cloudly')

    const findWeather = async () => { // Получает данные с API
        let data;
        try {
            await fetch(`http://api.weatherapi.com/v1/current.json?key=c2ecdba7a8a648009b4173326222812&q=${city}&aqi=no`)
            .then(data =>data.json())
            .then(res => res.current)
            .then(arr => data = arr)
        } catch (error) {
            console.log(error)
        }
        console.log(data)
        if (data) { //Проверка на корректность веденного города
            setValue(data) //Передает полученные данные в поле value
            setImg(value.condition.icon)
            setText(value.condition.text)
        } else {
            setCity('Город не найден') //Ответ пользователю на неверно веденный город
        }

    }

    const changeCity = (e) => {
        setCity(e.target.value)
    }


    useEffect(() => {
        findWeather() //Добавляет начальное значение
    }, [])


    return (
        <div>
            <div className="weather-search">
                    <Input
                        style={{width:'80%', marginRight: '71px'}}
                        placeholder="Москва"
                        onChange={changeCity}
                    ></Input>
                    <Button
                        style={{width: "106px"}}
                        variant="outlined"
                        color="primary"
                        onClick={findWeather}>
                        <span className="weather-btn-txt">
                            Поиск
                        </span>
                    </Button>
            </div>

            <div className="weather-stat">
                <div className="weather-place">
                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.45002 0C14.6745 0 18.9 3.60195 18.9 8.05547C18.9 14.0971 9.45002 23.0156 9.45002 23.0156C9.45002 23.0156 2.47955e-05 14.0971 2.47955e-05 8.05547C2.47955e-05 3.60195 4.22552 0 9.45002 0ZM9.45002 10.9324C11.313 10.9324 12.825 9.64355 12.825 8.05547C12.825 6.46739 11.313 5.17852 9.45002 5.17852C7.58702 5.17852 6.07502 6.46739 6.07502 8.05547C6.07502 9.64355 7.58702 10.9324 9.45002 10.9324Z" fill="white"/>
                </svg>
                <h1 className="weather-city">{city}</h1>
                </div>

                <div className="weather-data">
                    <div className="weather-data-left">
                        <h1 className="weather-temp">{value.temp_c}°</h1>
                        <h3 className="weather-temp-feel">Feel like {value.feelslike_c}°</h3>
                    </div>
                    <div className="weather-data-right">
                        <img src={img} alt={text} />
                        <h3 className="weather-text">{text}</h3>
                    </div>
                </div>

                <div className="weather-result">
                    <div className="weather-result-mini">
                        <p className="weather-result-crit">UV Index</p>
                        <p className="weather-result-data">{value.uv}</p>
                    </div>
                    <div className="weather-result-mini">
                        <p className="weather-result-crit">Humidity</p>
                        <p className="weather-result-data">{value.humidity}</p>
                    </div>
                    <div className="weather-result-mini">
                        <p className="weather-result-crit">Wind Speed</p>
                        <p className="weather-result-data">{value.wind_kph}&nbsp;mph</p>
                    </div>
                    <div className="weather-result-mini">
                        <p className="weather-result-crit">Rain Probability</p>
                        <p className="weather-result-data">{value.pressure_in}&nbsp;%</p>
                    </div>
                    <div className="weather-result-mini">
                        <p className="weather-result-crit">Pressure</p>
                        <p className="weather-result-data">{value.pressure_mb}&nbsp;pa</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather