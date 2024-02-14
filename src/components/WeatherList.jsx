import {FlatList, StyleSheet, Text, View, Image, ActivityIndicator} from "react-native";

export const WeatherList = ({weather, isCelcius, loading}) => {
    return <FlatList
        style={styles.list}
        contentContainerStyle={{flexGrow: 1}}
        data={weather}
        ListEmptyComponent={() => <PlaceholderCell loading={loading} />}
        renderItem={(w) =>
            <WeatherCell
                date={new Date(w.item.dt * 1000).toDateString()}
                isCelcius={isCelcius}
                minTemp={w.item.temp.min}
                maxTemp={w.item.temp.max}
                icon={w.item.weather[0] ? w.item.weather[0].icon : ''}
                humidity={w.item.humidity}
            />
        }
    />
}

const WeatherCell = ({date, minTemp, maxTemp, humidity, icon, isCelcius}) => {
    return <View style={styles.weatherContainer}>
        <View style={styles.weatherItem}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.minTemp}>Min: {getTemperatureText(minTemp, isCelcius)}</Text>
            <Text style={styles.maxTemp}>Max: {getTemperatureText(maxTemp, isCelcius)}</Text>
            <Text style={styles.maxTemp}>Humidity: {humidity}%</Text>
        </View>
        <Image source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}} style={{width: 40, height: 40}}></Image>
    </View>
}

const PlaceholderCell = ({loading = false}) => {
    if (loading) {
        return <ActivityIndicator animating size={'large'}/>
    }
    return <Text>No weather found, try searching again or another city</Text>
}

const getTemperatureText = (temp, isCelcius) => {
    return isCelcius ? `${temp.toFixed(0)} °C` : `${((temp * 9/5) + 32).toFixed(0)} °F`;
}

const styles = StyleSheet.create({
    list: {
        flex: 0,
    },
    weatherContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    weatherItem: {
        flex: 1,
        padding: 10,
    },
    date: {
        fontWeight: 'bold',
    },
    minTemp: {
        marginLeft: 10,
    },
    maxTemp: {
        marginLeft: 10,
    },
})

