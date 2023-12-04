import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './redux/action'

function UserList() {

    const dispatch = useDispatch()
    const dataList = useSelector(({ reducer }) => reducer)
    // console.warn(dataList)


    useEffect(() => {
        dispatch(getUserList())
    })

    return (
        <>
            <View style={styles.Container}>
                <Text style={styles.Text}>Wellcome To the JwellyJungle</Text>
            </View>
        </>
    ), []
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    Text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'skyblue',

    }
})

export default UserList