import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {faGasPump} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import HeaderComponent from '../components/HeaderComponent';
import ButtonAvatarComponent from '../components/ButtonAvatarComponent';

const iconGasPump = <FontAwesomeIcon icon={faGasPump}/>
export function navigationOptions({navigation}) {
    return {
        title: "Posto de Gasolia",
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        drawerIcon: iconGasPump
    }
}

const RegisterFuelStationScreen = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <HeaderComponent {...props} title="Posto de Gasolina" icone="home"/>
                <ScrollView>
                    <View style={styles.containerBody}>
                        <ButtonAvatarComponent size="xlarge" iconColor='#2089dc' name="plus" subTitle='Adicionar' {...props} onPres={() => {navigate('Adicionar')}} />
                        <ButtonAvatarComponent size="xlarge" iconColor='#2089dc' name="plus" subTitle='Adicionar' {...props} onPres={() => {navigate('Adicionar')}} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const Screen = {
    screen: RegisterFuelStationScreen,
    navigationOptions,
    params: {
        navigationType: 'drawer'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        flex:2,
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerBody: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
export default Screen;