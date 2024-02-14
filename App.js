import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./src/redux/store";
import {HomeScreen} from "./src/screens/HomeScreen";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <SafeAreaView>
                    <HomeScreen/>
                </SafeAreaView>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
    },
});
