import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import classes from '../Styles/SelectTimeStyle'

const SelectTime = (props) => {
  const [activeButton, setActiveButton] = useState(false)

  const CustomButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const { onPress, title, style, textStyle, ID } = props

    const isActiveButton = activeButton === ID

    return (
      <Pressable
        onPress={() => {
          onPress(ID)
        }}
        style={[style, isActiveButton ? classes.active_btn : null]}
      >
        <Text style={textStyle || classes.default_btn_text}>
          {title || 'Click me!'}
        </Text>
      </Pressable>
    )
  }

  const selectTimeHandler = (ID) => setActiveButton(ID)

  const submitTimeHnalder = () => setActiveButton(null)

  return (
    <View style={classes.container}>
      <Text style={classes.header}>Numatomas atsiėmimo/gražinimo laikas</Text>

      <ScrollView horizontal style={classes.selection_slider}>
        <View style={classes.selection_list}>
          <CustomButton
            ID={1}
            title={'08:00'}
            style={classes.selection_btn}
            onPress={selectTimeHandler}
          />
          <CustomButton
            ID={2}
            title={'09:00'}
            style={classes.selection_btn}
            onPress={selectTimeHandler}
          />
          <CustomButton
            ID={3}
            title={'10:00'}
            style={classes.selection_btn}
            onPress={selectTimeHandler}
          />
          <CustomButton
            ID={4}
            title={'11:00'}
            style={classes.selection_btn}
            onPress={selectTimeHandler}
          />
          <CustomButton
            onPress={submitTimeHnalder}
            title="Susitarti"
            style={classes.selection_btn}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default SelectTime
