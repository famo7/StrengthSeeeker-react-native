import { View } from "react-native"
import { Card, Button } from "react-native-paper"
import React, { useEffect } from "react";
import MenuComponent from "../components/MenuComponent";
import { createRoutineSlice } from "../store/routineStore";


export default function Plan () {
    const getRoutines = createRoutineSlice(state => state.getRoutines);
    useEffect(() => {
        getRoutines()
    }, [])
    const routines = createRoutineSlice(state => state.routines)
    const onEdit = () => { }
    const onDelete = () => { }

    return (
        <View>
            {routines.map((routine) => (
                <View key={routine.id} style={{ margin: 10 }}>
                    <Card>
                        <Card.Title
                            key={routine.id}
                            titleVariant="titleMedium"
                            title={routine.name}
                            titleStyle={{ fontFamily: 'Lato-Bold' }}
                            subtitle={`${routine.workouts.length} ${routine.workouts.length > 1 ? 'Workouts' : 'Workout'}`}
                            subtitleStyle={{ fontFamily: 'Lato-Regular' }}
                            right={(props) => <MenuComponent onEdit={onEdit} onDelete={onDelete} />}
                        />

                        {!routine.active ? <Card.Actions>
                            <Button mode="contained">Switch</Button>
                        </Card.Actions> : null}
                    </Card>
                </View>

            ))}
        </View>
    )
}