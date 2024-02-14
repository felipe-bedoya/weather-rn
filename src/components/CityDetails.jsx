import {StyleSheet, Text, View} from "react-native";

export const CityDetails = ({location, city, state, country}) => {
    return <View style={styles.container}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.subtitle}>{city}, {state}, {country}</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 0
    },
    location: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 16,
        color: '#6b6b6b'
    }
});
