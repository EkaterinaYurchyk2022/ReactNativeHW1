import {StatusBar} from 'expo-status-bar';
import {StyleSheet, TextInput, TouchableOpacity, View, Text, Image, ImageBackground} from 'react-native';
import {InputValueSelector} from './InputValueSelector';
import {useState} from 'react';

const image = {uri: 'https://atlasbus.by/static/background.jpg'}
export default function App() {
    const [value, setValue] = useState('')
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Image
                    style={{
                        width: 200, height: 38, top: -100, marginLeft: 80

                    }}
                    source={require('./assets/img/headerImg.png')
                    }
                />
                <InputValueSelector value={value} onChangeText={setValue} placeholder="Откуда"/>
                <InputValueSelector value={value} onChangeText={setValue} placeholder="Куда"/>
                <InputValueSelector value={value} onChangeText={setValue} placeholder="Дата"/>
                <InputValueSelector value={value} onChangeText={setValue} placeholder="Количество пассажиров"/>
                {/*<TextInput*/}
                {/*    style={{*/}
                {/*        borderStyle: 'solid',*/}
                {/*        width: 350,*/}
                {/*        height: 38,*/}
                {/*        backgroundColor: 'darkgrey',*/}
                {/*        marginLeft: 20,*/}
                {/*        marginTop: 5,*/}
                {/*        alignItems: 'center'*/}
                {/*    }}*/}
                {/*    onChangeText={() => {*/}
                {/*    }}*/}
                {/*    value={''}*/}
                {/*    placeholder="Куда"*/}

                {/*/>*/}
                {/*<View style={styles.bottomContainer}>*/}
                {/*    <TextInput*/}
                {/*        style={{*/}
                {/*            borderStyle: 'solid',*/}
                {/*            width: 350,*/}
                {/*            height: 38,*/}
                {/*            backgroundColor: 'darkgrey',*/}
                {/*            marginLeft: 20,*/}
                {/*            marginTop: 5,*/}
                {/*            alignItems: 'center'*/}
                {/*        }}*/}
                {/*        onChangeText={() => {*/}
                {/*        }}*/}
                {/*        value={''}*/}
                {/*        placeholder="Дата"*/}

                {/*    />*/}
                {/*    <TextInput*/}
                {/*        style={{*/}
                {/*            borderStyle: 'solid',*/}
                {/*            width: 350,*/}
                {/*            height: 38,*/}
                {/*            backgroundColor: 'darkgrey',*/}
                {/*            marginLeft: 20,*/}
                {/*            marginTop: 5,*/}
                {/*            alignItems: 'center'*/}
                {/*        }}*/}
                {/*        onChangeText={() => {*/}
                {/*        }}*/}
                {/*        value={''}*/}
                {/*        placeholder="Количество пассажиров"*/}

                {/*    />*/}
                {/*</View>*/}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'darkgrey',
                        padding: 10,
                        margin: 50,

                    }}
                    onPress={() => {
                    }}
                >
                    <Text style={{color: 'white'}}>Найти</Text>
                </TouchableOpacity>
            </ImageBackground>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0'
    },

});
