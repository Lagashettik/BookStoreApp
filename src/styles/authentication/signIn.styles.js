import { StyleSheet } from 'react-native';
import { globalStylesheet } from '../globalStylesheets/globalStyles.styles';

export const signInStyles = StyleSheet.create({
    parent_view: {
        ...globalStylesheet.parent_conatainer_view,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    image_view: {
        width: '100%',
        height: '80%',
        resizeMode: 'center'
    },
    image_title_view: {
        width: '60%',
        height: '40%',
        alignSelf: 'center'
    },
    title_style: {
        fontSize: 40,
        alignSelf: 'center'
    },
    child_view: {
        width: '100%',
        height: '60%'
    },
    text_input: {
        ...globalStylesheet.text_input,
        marginTop: '10%'
    },
    signIn_button: {
        ...globalStylesheet.button
    }
})