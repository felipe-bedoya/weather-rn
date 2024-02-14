import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {CityDetails} from "./CityDetails";

export const CityList = ({cities = [], loading = false, didSearchOnce = false, onCitySelected}) => {
    return <FlatList contentContainerStyle={{flexGrow: 1}}
                     style={styles.list}
                     data={cities}
                     ListEmptyComponent={() =>
                         <PlaceholderCell
                             loading={loading}
                             didSearchOnce={didSearchOnce}
                         />}
                     renderItem={(city) => <TouchableOpacity onPress={() => onCitySelected(city.item)}>
                         <CityCell
                             location={city.item.display}
                             city={city.item.city_name}
                             state={city.item.state}
                             country={city.item.country}
                         />
                     </TouchableOpacity>}
    />;
}

const CityCell = ({location, city, state, country}) => {
    return <View style={styles.cityCell}>
        <CityDetails location={location}
                     city={city}
                     state={state}
                     country={country}/>
        <View>
            <Feather name="chevron-right" size={24} color="black"/>
        </View>
    </View>
}

const PlaceholderCell = ({loading = false, didSearchOnce = false}) => {
    if (loading) {
        return <ActivityIndicator animating size={'large'}/>
    }
    if (didSearchOnce) {
        return <Text style={styles.placeholderText}>Try searching for another location</Text>
    }
    return <Text style={styles.placeholderText}>Enter a city on the search box above</Text>
}

const styles = StyleSheet.create({
    list: {
        flex: 0,
    },
    placeholderText: {
        padding: 16,
        alignSelf: 'center',
        color: '#8f8f8f'
    },
    cityCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
});
