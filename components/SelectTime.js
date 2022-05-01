import React, {useState} from 'react'
import {View, Text, Pressable} from "react-native";
import classes from "../Styles/SelectTimeStyle";


const SelectTime = (props) => {

    const [activeButton, setActiveButton] = useState(false);


    const CustomButton = ({onPress, title, style, textStyle, ID}) => {
        const isActiveButton = activeButton === ID;


        return <Pressable onPress={() => {onPress(ID)}} style={[style, isActiveButton ? classes.active_btn : null]}>
            <Text style={textStyle || classes.default_btn_text}>
                {title || "Click me!"} 
            </Text>
        </Pressable>
    }
        

    const selectTimeHandler = (ID) => {
        setActiveButton(ID);

        // picking data
    }

    const submitTimeHnalder = () => {
        setActiveButton(null);

        // getting picked data ..
    }


    return (

        <View style={classes.container}>

            <Text style={classes.header} >Numatomas atsiėmimo/gražinimo laikas</Text>

            <View style={classes.content}>

                <View style={classes.options}>
                    <CustomButton ID={1} title={"08:00"} style={classes.selection_btn} onPress={selectTimeHandler}/>
                    <CustomButton ID={2} title={"09:00"} style={classes.selection_btn} onPress={selectTimeHandler}/>
                    <CustomButton ID={3} title={"10:00"} style={classes.selection_btn} onPress={selectTimeHandler}/>
                    <CustomButton ID={4} title={"11:00"} style={classes.selection_btn} onPress={selectTimeHandler}/>
                </View>

                <CustomButton 
                    onPress={submitTimeHnalder} 
                    title="Susitarti" 
                    textStyle={{fontSize:30, textAlign:"center"}} 
                    style={classes.submit_btn} 
                />

            </View>


        </View>
    )
}

export default SelectTime