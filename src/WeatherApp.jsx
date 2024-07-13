import { useState } from "react"

export default function WeatherApp(){
    // 入力された値の保持
    const [formData, setFormData] = useState({
        city: '',
    });

    // APIで返却された値を保持
    const [resultData, setResultData] = useState({
        country: 'U.S.A',
        city: 'Tokyo',
        temperature: '',
        weather: '',
        img: '',


    });

    const imgUrl = `https:${resultData.img}`;

    // 入力の受け取り
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 入力値からAPI呼び出し
    const handleSubmit = (event) => {
        event.preventDefault();
        getWeather();
    };

    // weather api の呼び出し
    const getWeather = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=947ac7d387164bf9bff95033241307&q=${formData.city}&aqi=no`)
        .then(Response => Response.json())
        .then(jsonData => setResultData({
            ...resultData,
            country: jsonData.location.country,
            city: jsonData.location.name,
            temperature: jsonData.current.temp_c,
            weather: jsonData.current.condition.text,
            img: jsonData.current.condition.icon,
        }));
    }

    return(
        <>
            <div>
                <h1>JS World Weather</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="city" value={formData.city} placeholder="都市名を英語で入力" onChange={handleChange}/>
                    <button type="submit">Get Weather</button>
                </form>
            </div>
            <div>
                <div>{resultData.country}</div>
                <div>{resultData.city}</div>
                <div>{resultData.temperature}<span>℃</span></div>
                <div>
                    <img src={imgUrl} alt="icon" />
                    <span>{resultData.weather}</span>
                </div>
            </div>
        </>
    )
}