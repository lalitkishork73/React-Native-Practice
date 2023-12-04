import React, { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    FlatList
} from 'react-native';

import { useSelector } from 'react-redux';

function Header() {
    const cartData = useSelector(({ reducer }) => reducer)
    const [item, setItem] = useState(0)

    useEffect(() => {
        setItem(cartData.length)
    }, [cartData])


    return (
        <View>
            <View style={styles.Header}>

                {/* <Text style={styles.text} >0</Text> */}
                <Text style={styles.text} >{item}</Text>
            </View>
        </View>
    )
}

const styles: any = StyleSheet.create({
    Header: {
        backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        textAlign: 'right',
        color: 'white'
    }

})

export default Header