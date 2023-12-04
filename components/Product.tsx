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
    FlatList,
    Image
} from 'react-native';


import API from './api/api';
import { AddToCart, RemoveToCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';



function Product() {
    const [data, setData] = useState<any>([])
    const dispatch = useDispatch()
    const cartData = useSelector(({ reducer }) => reducer)
    const [isAdded, setIsAdded] = useState(false)
    const [current, setCurrent] = useState<any>(null)

    useEffect(() => {
        getdata()
        CheckItem()

    }, [cartData])

    const CheckItem = () => {
        if (cartData && cartData.length && current !== null) {
            cartData.forEach((elem: any) => {
                console.warn(current.name)
                if (elem.name === current.name) {
                    setIsAdded(true)
                }
            })
        }
    }

    const getdata = async () => {
        try {
            const metadata: any = await API();
            setData(metadata)
        } catch (err: any) {
            console.warn(err)
        }
    }

    const handleAddToCart = (item: any) => {
        setCurrent(item)
        dispatch(AddToCart(item))
    }

    const handleRemoveToCart = (item: any) => {
        dispatch(RemoveToCart(item))
        setIsAdded(false)
    }

    return (
        <View>
            {data.length ? <>

                <FlatList
                    data={data}
                    renderItem={({ item }: any) =>
                        <View style={styles.Card}>
                            <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
                            <Text style={styles.title}> {item.name}</Text>
                            <Text style={styles.price}> {item.price}</Text>

                            {isAdded ? <>
                                <Button title='Remove Too Cart' onPress={() => handleRemoveToCart(item)} />
                            </> : <>
                                <Button title='Add Too Cart' onPress={() => handleAddToCart(item)} />
                            </>}

                        </View>} /></> : null}


        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        alignItems: 'center',
        borderBottomColor: 'orange',
        padding: 10,
        margin: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 20


    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
    },
    price: {
        color: 'red',
        fontSize: 20,
    }

})

export default Product