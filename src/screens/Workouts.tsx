import { View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import MenuComponent from '../components/MenuComponent';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import { createWorkoutSlice } from "../store/workoutStore";
import { useEffect } from 'react';


const Workouts = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { workouts, getWorkouts } = createWorkoutSlice(state => state)
    useEffect(() => {
        getWorkouts()
    }, [])
    const onEdit = () => { }
    const onDelete = () => { }

    return (
        <View>
            {workouts.map((workout) => (
                <Card key={workout.id} style={{ marginTop: 20 }} onPress={() => navigation.navigate('Exercises', { id: workout.id })}>
                    <Card.Title
                        style={{}}
                        key={workout.id}
                        title={workout.name}
                        titleVariant="titleMedium"
                        titleStyle={{ fontFamily: 'Lato-Bold' }}
                        subtitleStyle={{ fontFamily: 'Lato-Regular', fontSize: 12 }}
                        subtitle={`${workout.exercises.length} ${workout.exercises.length > 1 ? 'Exercises' : 'Exercise'}`}
                        right={() => <MenuComponent onEdit={onEdit} onDelete={onDelete} />}
                    />

                </Card>
            ))}
        </View>
    )
}

export default Workouts