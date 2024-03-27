import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function SBItem({ item }) {
    console.log('item', item);
  return (
    <View
        style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
            backgroundColor: item?.color,
            borderRadius: 10,
            overflow: 'hidden',
        }}
    >
        <Image style={styles.img} source={item.img} />
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        height: '100%',
        width: '100%',
    }
})