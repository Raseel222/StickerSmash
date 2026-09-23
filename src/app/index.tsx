import Card from '@/components/Card'
import { StyleSheet, Text, View } from 'react-native'

const explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text>search</Text>

      </View>

      <Card />
      <Card />
      <Card />



    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  search: {
    width: 400,
    height: 50,
    borderWidth: 2,

    alignSelf: "center",
    borderRadius: 20

  },

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

})////////


