import {Alert} from 'react-native';

const AlertComponent = (title, msg, buttons) => {
    Alert.alert(title, msg, buttons, {cancelable: false})
}

export default AlertComponent;