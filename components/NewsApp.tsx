import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

interface NewsItem {
    title: string;
    description: string;
    publishedAt: string; //convert to date local:new Date(item.publishedAt).toLocaleDateString()
    url: string;
}

const NewsApp = (): React.JSX.Element => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const API_KEY = '653e6c13f9fe4d7fa18459b44ac215e4'; // ใส่ API Key ของคุณที่นี่
        const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setNews(data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the news:', error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }: { item: NewsItem }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.headline}>{item.title}</Text>
            <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    );
    
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load news. Please try again later.</Text>
            </View>
        );
    }

    if (!news.length) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>ไม่มีข้อมูล</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={item => item.url}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        marginTop:20
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    card: {
        backgroundColor: '#add8e6',
        padding: 16,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    headline: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,       
        color: 'black',
        marginBottom: 8,     
    },
    description: {
        fontSize: 16,
        color: '#333',
    },
});

export default NewsApp;
