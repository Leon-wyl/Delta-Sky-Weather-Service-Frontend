import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import { Box, AppBar, IconButton, Toolbar, Stack, Button, ButtonGroup } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/ThunderstormOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Cascader } from "antd";
import { weatherStation } from "../constants/weatherStation";
import styles from "./Header.module.css";
import { DataContext } from "../store/DataContext";
import { fetchWeatherData, fetchNews } from "../api/Api";

const Header = () => {

  const { weatherData, loading, setWeatherData, setLoading, setStation } =
    useContext(DataContext);

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  const onChange = async (value, selectedOptions) => {
    console.log(value, selectedOptions);
    if (value) {
      setLoading(true);
      setStation(selectedOptions[0].label);
    } else {
      setWeatherData(null);
      setStation(null);
      return;
    }
    const weatherData = await fetchWeatherData();
    if (weatherData.data) {
      const filteredData = value
        ? weatherData.data.events.filter((item) => item.wmo === value[0])
        : null;
      filteredData.length === 0
        ? setWeatherData(null)
        : setWeatherData(filteredData);
    } else {
      setWeatherData(null);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <AppBar position='static' color='success' sx={{ mb: '2rem' }}>
        <Toolbar>
          <IconButton size='large' aria-label='logo'>
            <ThunderstormIcon sx={{ color: 'white', fontSize: 40 }} />
          </IconButton>
          <Typography
            variant='h4'
            color="white"
            style={{ color: 'white' }}
            sx={{ flexGrow: 1 }}
            data-testid='delta-sky'
          >
            DELTA SKY
          </Typography>
          <Stack direction='row' spacing={2} color='white'>
            <Typography variant="h6">Standard</Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <Typography variant="h2">Latest Weather Trends</Typography>
        <IconButton size='large' aria-label='logo'>
          <TimelineIcon fontSize='large' />
        </IconButton>
      </Box>
      {
        !weatherData && (
          <Typography variant="h5" sx={{ my: '1rem' }}>
            Please Select a weather station to view the data
          </Typography>
        )
      }
      <Box sx={{ mb: '2rem' }}>
        <Cascader
          options={weatherStation}
          onChange={onChange}
          disabled={loading}
          placeholder="Please select a weather station"
          showSearch={{
            filter,
          }}
          onSearch={(value) => console.log(value)}
        />
      </Box>
    </div >
  );
};

export default Header;
