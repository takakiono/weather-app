import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const pages = [
  { title: 'About Page', path: '/about' },
  { title: 'Search Weather', path: '/searchWeather' },
  // 他のページを追加
];

const HomePage = () => {
  return (
    <Box className="home-container">
      <Typography variant="h3" gutterBottom>
        Home Page
      </Typography>
      <Box className="card-container">
        {pages.map((page, index) => (
          <Card key={index} component={Link} to={page.path} className="card">
            <CardContent className="card-content">
              <Typography variant="h5" component="div">
                {page.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
