import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import validationInput from '../validation/validationInput';

onBlurHandle = (value, name, setError) => {
    const error = validationInput(value, name)
    if(error) {
        setError(error[0]);
    } else {
        setError('');
    }
}

const TextInputComponent = props => {
    const [error, setError] = useState('');
    return (
        <View>
            <Input
            label = {props.label}
            placeholder={props.placeHolder}
            errorStyle={{color: 'red'}}
            errorMessage={error}
            leftIcon={
                <Icon
                name={props.icone}
                size={24}
                color='black'
                type="material"
                 />
            }

            onChangeText={(text)=> props.setValue(text)}
            value={props.value}
            onBlur={() => {onBlurHandle(props.value, props.nameInput, setError)}}
             />
        </View>
    )
}

export default TextInputComponent;