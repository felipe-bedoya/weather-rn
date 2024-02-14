import {Stack} from "expo-router";
import {Provider} from "react-redux";
import store from "../src/redux/store";

export default function Layout() {
    return (
        <Provider store={store}>
            <Stack
                screenOptions={{
                    headerStyle: {backgroundColor: '#fff'},
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            >
                <Stack.Screen
                    name={'index'}
                    options={{
                        title: 'Home',
                        headerStyle: {backgroundColor: '#fff'},
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen
                    name={'weather'}
                    options={{
                        title: 'Weather',
                        headerStyle: {backgroundColor: '#fff'},
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                />
            </Stack>

        </Provider>

    );
}
