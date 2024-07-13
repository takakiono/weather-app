import { useState } from "react";
import { Container, Grid, Typography, TextField, Button, Paper, Box } from "@mui/material";


export default function WeatherApp(){
    // 入力された値の保持
    const [formData, setFormData] = useState({
        city: '',
    });

    // APIで返却された値を保持
    const [resultData, setResultData] = useState({
        country: '国名',
        city: '都市名',
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

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Box
                sx={{
                    backgroundImage: `url('/sunny.jpg')`, // ここに背景画像のURLを設定
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    p: 2,
                }}
            >
                <Paper elevation={3} sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        JS World Weather
                    </Typography>
                    <form onSubmit={handleSubmit} sx={{ mb: 2 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={8}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Enter city name in English"
                                    variant="outlined"
                                    />
                            </Grid>
                            <Grid item xs={4}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Get Weather
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Box textAlign="center">
                        <Typography variant="h6">{resultData.country}</Typography>
                        <Typography variant="h5">{resultData.city}</Typography>
                        <Typography variant="h3" sx={{ mt: 1, mb: 1 }}>
                            {resultData.temperature}<span>℃</span>
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <img src={imgUrl} alt="Weather Icon" style={{ marginRight: 10 }} />
                            <Typography variant="h6">{resultData.weather}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}