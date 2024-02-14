import {WeatherScreen} from "../src/screens/WeatherScreen";
import {StyleSheet, View} from "react-native";

const WeatherPage = () => {
    return <View style={styles.container}>
        <WeatherScreen/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
    },
});
export default WeatherPage;
