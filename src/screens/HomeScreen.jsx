import {StyleSheet, View} from "react-native";
import {CitySearch} from "../components/CitySearch";
import {useDispatch, useSelector} from "react-redux";
import {getCitiesFromSlug} from "../redux/cityThunk";
import {CityList} from "../components/CityList";
import {useState} from "react";
import {selectCity} from "../redux/citySlice";
import {router} from "expo-router";
import {clearWeather} from "../redux/weatherSlice";

export const HomeScreen = () => {
    const state = useSelector((state) => state.cities);
    const [didSearch, setDidSearch] = useState(false);
    const dispatch = useDispatch();
    const onSearch = (query) => {
        dispatch(getCitiesFromSlug(query))
        if (!didSearch) {
            setDidSearch(true);
        }
    }

    const onCitySelected = (city) => {
        dispatch(selectCity(city));
        dispatch(clearWeather())
        router.push({pathname: '/weather'});
    }
    return <View style={styles.container}>
        <CitySearch
            onSearch={onSearch}
            loading={state.loading}
        />
        <CityList
            cities={state.cities}
            loading={state.loading}
            didSearchOnce={didSearch}
            onCitySelected={(city) => onCitySelected(city)}
        />
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        padding: 16,
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
    }
});
