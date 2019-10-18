import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

const ButtonAvatarComponent = props => {
    return (
        <View style={styles.buttons}>
            <TouchableOpacity>
                <Avatar 
                size={props.size}
                rounded
                overlayContainerStyle = {{ backgroundColor: props.iconColor}}
                icon={{name: props.name, type:'font-awesome'}}
                onPress={props.onPress}
                />
            </TouchableOpacity>
            <Text>{props.subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        width: '48%',
        height: '48%',
        aspectRatio: 1,
        margin:2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ButtonAvatarComponent;