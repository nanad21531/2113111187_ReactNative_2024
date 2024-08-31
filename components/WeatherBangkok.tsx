import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
  currentDate: Date | null; // Allow null initially
}

const formatDate = (date: Date | null): string => {
  if (!date) return ''; // Return an empty string if date is null
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('th-TH', options);
};

const WeatherBangkok = (): React.JSX.Element => {

  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
    currentDate: new Date(),
  });

  const fetchWeatherData = async () => {
    const API_KEY = 'd78aaab2d84844433d115114fb3bb62e';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric&lang=th`;
    try {
      const response = await axios.get(URL);
      setState({
        data: response.data,
        loading: false,
        error: null,
        currentDate: new Date(),
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: 'Failed to fetch weather data',
        currentDate: null,
      });
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (state.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{state.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {formatDate(state.currentDate)}
        {/* {state.currentDate ? state.currentDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }) : ''} */}
      </Text>
      <Text style={styles.cityName}>{state.data.name}</Text>
      <Text style={styles.temp}>{state.data.main.temp}°C</Text>
      <Text style={styles.weatherMain}>{state.data.weather[0].main}</Text>
      <Text style={styles.weatherDescription}>{state.data.weather[0].description}</Text>

      <FlatList
        data={[
          { key: 'รู้สึกเหมือน', value: `${state.data.main.feels_like}°C` },
          { key: 'อุณหภูมิต่ำสุด', value: `${state.data.main.temp_min}°C` },
          { key: 'อุณหภูมิสูงสุด', value: `${state.data.main.temp_max}°C` },
          { key: 'ความชื้น', value: `${state.data.main.humidity}%` },
          { key: 'ความกดอากาศ', value: `${state.data.main.pressure} hPa` },
        ]}
        renderItem={({ item }) => (
          <View style={styles.detailContainer}>
            <Text style={styles.detailKey}>{item.key}:</Text>
            <Text style={styles.detailValue}>{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.details}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#87DFD6',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  dateText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 16,
    marginTop: 20
  },
  cityName: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  temp: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#CD5C08',
  },
  weatherMain: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  weatherDescription: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 16,
    color: '#666',
  },
  details: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  detailKey: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailValue: {
    fontSize: 18,
    color: '#333',
  },
});

export default WeatherBangkok;


