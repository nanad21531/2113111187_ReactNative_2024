import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styleNewApps } from "../styles/styles";

interface user {
    title: string;
    publishedAt: string;
    author: string;
    url: string;
}

const NewApps = () => {
    const API_KEY = "c6e4afcdff36447b989977b6d81a7546"; // ใส่ API Key ของนักศึกษาที่นี่
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const [data, setData] = React.useState<user[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setData(data.articles);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []); //[] = use only first time running

    const _renderItem = ({ item }: { item: user }) => {
        return (
            <View style={styleNewApps.card}>
                <Text style={styleNewApps.headline}>{item.title}</Text>
                <Text style={styleNewApps.description}>{item.author}</Text>
                <Text style={styleNewApps.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
            </View>
        );
    };

    return (
        <View style={styleNewApps.container}>
            {loading ? (<ActivityIndicator size="large" color="red" />) :
                <FlatList
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={item => item.url} />
            }
        </View>
    );
};

export default NewApps