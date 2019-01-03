import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
const Task = (props) => (
    <View style={styles.taskWrapper}>
        <TouchableOpacity onPress={() => props.setChecked()}>
            <Icon
                name={props.checked ? "check" : "square"}
                size={30}
                color="#900"
                style={{ marginLeft: 15 }}
            />
        </TouchableOpacity>

        <View>
            {props.checked && <View style={{
                borderBottomColor: 'white',
                borderBottomWidth: 4,
                marginLeft: 10,
                //   top: 2,
                width: '100%',
                position: 'absolute',
                marginTop: 15
                // zIndex: 1
            }}></View>}
            <Text style={styles.task}>{props.text}</Text>
        </View>
        <Icon name="trash-2" size={30} color="#900" style={{ marginLeft: 'auto' }} />
    </View>
)

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',
        // alignItems: 'baseline',
        borderColor: '#D0D0D0',
        borderBottomWidth: 0.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
    },
    task: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: 'white',
        borderBottomWidth: 1,
        // marginBottom: 4,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
})