import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = () => {
    return (
        < TouchableOpacity onPress={()=>{alert("Hi")}}>

            <View style={styles.box}>
                <Text>12:00</Text>
                <View style={styles.Hello}>
                    <Text>farah</Text>

                    <Text>Hello</Text>
                </View>



                <Image style={styles.image} source={{ uri: "https://png.pngtree.com/png-clipart/20240322/original/pngtree-cute-little-yellow-cat-png-image_14654235.png" }} />
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    box: {
        width: 400,
        borderWidth: 3,
        alignSelf: "center",
        margin: 20,
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 70,
        resizeMode: 'contain'

    }
})