import { StyleSheet } from 'react-native';
import { globalStylesheet } from '../globalStylesheets/globalStyles.styles';

export const registrationStyleSheet = StyleSheet.create({
    parent_view: {
        ...globalStylesheet.parent_conatainer_view,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    text_input_name: {
        ...globalStylesheet.text_input,
        width: '49%'
    },
    text_input: {
        marginTop: '10%',
        backgroundColor: 'white',
        height:'10%'
    }
})