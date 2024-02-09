import { View, Text } from 'react-native'
import { useRoute } from "@react-navigation/native"

const Exercises = () => {
    const route = useRoute()
    const id = route.params?.id

    console.log(id);

    return (
        <View>
            <Text>Exercises</Text>
        </View>
    )
}

export default Exercises