import React from 'react'
import Header from './Header'
import Product from './Product'
import { Button, View } from 'react-native'

function ProductWrapper({ navigation }: any) {

    const handlePress = () => {
        navigation.navigate('User')

    }

    return <>
        <View>
            <Button title='Goto Home' onPress={handlePress} />
            <Header />
            <Product />
        </View>
    </>
}




export default ProductWrapper