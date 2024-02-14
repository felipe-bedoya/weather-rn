import {StyleSheet, Switch, Text, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {CityDetails} from "../components/CityDetails";
import {useEffect, useState} from "react";
import {getWeatherForLocation} from "../redux/weatherThunk";
import {WeatherList} from "../components/WeatherList";
import {changeScale} from "../redux/weatherSlice";

export const WeatherScreen = ({}) => {
    const city = useSelector((state) => state.cities.selectedCity);
    const weather = useSelector(state => state.weather);
    const [isEnabled, setIsEnabled] = useState(weather.isCelsius);
    const dispatch = useDispatch();
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        dispatch(changeScale());
    }
    useEffect(() => {
        dispatch(getWeatherForLocation({lat: city.lat, lng: city.long}));
    }, []);
    return <View style={styles.container}>
        <View style={styles.cityHeader}>
            <CityDetails location={city.display}
                         city={city.city_name}
                         state={city.state}
                         country={city.country}/>
            <View style={styles.unitToggle}>
                <Text>Change to {isEnabled ? '°F' : '°C'}</Text>
                <Switch onValueChange={toggleSwitch}
                        value={isEnabled}/>
            </View>
        </View>
        <WeatherList weather={weather.weather.daily} isCelcius={weather.isCelsius} loading={weather.loading}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
    },
    cityHeader: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    unitToggle: {
        alignItems: 'center'
    }
});
