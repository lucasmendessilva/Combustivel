import React from 'react';
import {View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';

const ButtonClick = props => {
    const {navigationType} = props.navigation.state.params;
    return (
        <View>
            <Button 
            onPress={ ()=> {
                navigationType === 'drawer' ? props.navigation.toggleDrawer() : props.navigation.goBack();
            }}
            icon={
                <Icon
                name={navigationType === 'drawer' ? 'menu' : 'backspace'}
                size={20}
                type="material"
                color="white"
                 />
            } />
        </View>
    )
}

const HeaderComponent = props => (
    <View style={{marginBottom: 20}}>
        <Header
        leftComponent={<ButtonClick {...props} />}
        centerComponent={{text: props.title, style: {color: 'white'}}}
        rightComponent={
            <Icon 
            name={props.icone}
            size={20}
            type="material"
            color="white"
            />
        }
         />
    </View>
)

export default HeaderComponent;