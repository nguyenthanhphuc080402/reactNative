import React, {Component} from 'react'
import {
    TouchableOpacity, 
    Text,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, fontSizes} from '../constants'

function UIHeader(props) {
    const {
        title, 
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon
    } = props
    return <View style={{
        height: 55,
        backgroundColor: '#5567C9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#00000',
        shadowOffset:{width: 0, height:5},
        shadowOpacity: 0.2,
        position: 'relative'
    }}>
        {leftIconName != undefined ? <Icon            
            name={leftIconName}
            style={{ padding: 10 }}
            size={23} color={'white'}
            onPress={onPressLeftIcon}
        /> : 
        <View style={{width: 50, height: 50 }}/>}

        <Text style={{
            fontSize: fontSizes.h5,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            alignSelf:'center',
            lineHeight: 40,
            color: 'white'
        }}>{title}</Text>

        {rightIconName != undefined ? <Icon            
            name={rightIconName}
            style={{ padding: 10 }}
            size={18} color={'white'}
            onPress={onPressRightIcon}
        /> : <View style={{width: 50, height: 50, }}/>}        
    </View>
}
export default UIHeader