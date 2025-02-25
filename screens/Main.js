import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    Button, 
    SafeAreaView
} from 'react-native'
import {images, colors, icons, fontSizes} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {isValidEmail, isValidPassword} from '../utilies/Validations'
import { UIHeader } from '../components';
import DateTimePicker from '@react-native-community/datetimepicker'
import {FlatListSan} from '../components';


function Main(props){
    return (
    <View style={{flex: 1, backgroundColor: '#ededed'}}>
        <FlatListSan props={props}></FlatListSan>
    </View>
)}
export default Main