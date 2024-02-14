import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Feather} from '@expo/vector-icons';
import {useState} from "react";

export const CitySearch = ({placeholder = 'Enter a location to search', onSearch, loading}) => {
    const [text, setText] = useState('');
    return <View style={styles.container}>
        <View style={styles.row}>
            <TextInput style={styles.textInput}
                       placeholder={placeholder}
                       onChangeText={(newText) => setText(newText)}
                       onSubmitEditing={() => onSearch(text)}
                       defaultValue={text}/>
            <TouchableOpacity onPress={() => onSearch(text)} disabled={loading}>
                <Feather style={styles.icon} name={'search'}/>
            </TouchableOpacity>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
        borderStyle: 'solid',
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8
    },
    icon: {
        flex: 0,
        padding: 10,
    }
});
